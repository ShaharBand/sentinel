import pytest
from datetime import datetime

from src.models.devices.device_factory import DeviceFactory
from src.services.devices import find_device_by_name, find_device_by_id
from src.utils.config import config

config.MOCK_DB = True


@pytest.fixture
def device_fixture():
    test_device = DeviceFactory.create_device({
        "name": "test",
        "description": "description",
        "address": "0.0.0.1",
        "os_type": "Windows",
        "last_scan_date": datetime.now().replace(microsecond=0)
    })
    yield test_device


def test_insert_and_find_device_by_name(device_fixture):
    test_device = device_fixture
    test_device.save_to_db()

    devices = find_device_by_name(test_device.data.name)
    for device in devices:
        assert test_device.data.name == device.data.name
    test_device.remove_from_db()


def test_update_device(device_fixture):
    test_device = device_fixture
    test_device.save_to_db()

    updated_description = "Updated description for integration test device"
    test_device.data.description = updated_description
    test_device.save_to_db()

    device = find_device_by_id(test_device.id)
    assert device.data.description == updated_description

    test_device.remove_from_db()


def test_remove_device(device_fixture):
    test_device = device_fixture
    test_device.save_to_db()

    removed_device_id = test_device.id
    test_device.remove_from_db()

    look_for_device = find_device_by_id(removed_device_id)
    assert look_for_device is None


def test_insert_and_find_multiple_devices():
    devices_to_insert = [
        DeviceFactory.create_device({
            "name": "device1",
            "description": "description1",
            "address": "1.1.1.1",
            "os_type": "Windows",
            "last_scan_date": datetime.now().replace(microsecond=0)
        }),
        DeviceFactory.create_device({
            "name": "device2",
            "description": "description2",
            "address": "2.2.2.2",
            "os_type": "Windows",
            "last_scan_date": datetime.now().replace(microsecond=0)
        })
    ]

    for device in devices_to_insert:
        device.save_to_db()
        look_for_device = find_device_by_id(device.id)
        assert look_for_device.data == device.data

        device.remove_from_db()
