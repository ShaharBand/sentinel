import pytest
from datetime import datetime

from src.models.devices.windows import WindowsDevice
from src.services.devices import find_device_by_name


@pytest.fixture
def windows_device_fixture():
    windows_device = WindowsDevice(
        name="test",
        description="description",
        address="0.0.0.1",
        os_type="Windows",
        last_scan_date=datetime.now().replace(microsecond=0)
    )
    yield windows_device


def test_insert_and_find_device_by_name(windows_device_fixture):
    windows_device = windows_device_fixture
    windows_device.insert_into_db()

    look_for_device = find_device_by_name(windows_device.data.name, windows_device.data.os_type)

    assert look_for_device.data == windows_device.data
    windows_device.remove_from_db()


def test_update_device(windows_device_fixture):
    windows_device = windows_device_fixture
    windows_device.insert_into_db()

    updated_description = "Updated description for integration test device"
    windows_device.data.description = updated_description
    windows_device.update_in_db()

    look_for_device = find_device_by_name(windows_device.data.name, windows_device.data.os_type)

    assert look_for_device.data.description == updated_description
    windows_device.remove_from_db()


def test_remove_device(windows_device_fixture):
    windows_device = windows_device_fixture
    windows_device.insert_into_db()

    removed_device_name = windows_device.data.name
    removed_device_os_type = windows_device.data.os_type
    windows_device.remove_from_db()

    look_for_device = find_device_by_name(removed_device_name, removed_device_os_type)
    assert look_for_device is None


def test_insert_and_find_multiple_devices():
    devices_to_insert = [
        WindowsDevice(
            name="device1",
            description="description1",
            address="1.1.1.1",
            os_type="Windows",
            last_scan_date=datetime.now().replace(microsecond=0)
        ),
        WindowsDevice(
            name="device2",
            description="description2",
            address="2.2.2.2",
            os_type="Windows",
            last_scan_date=datetime.now().replace(microsecond=0)
        )
    ]

    for device in devices_to_insert:
        device.insert_into_db()

    for device in devices_to_insert:
        look_for_device = find_device_by_name(device.data.name, device.data.os_type)
        assert look_for_device.data == device.data

        device.remove_from_db()
