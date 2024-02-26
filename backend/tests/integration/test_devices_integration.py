import pytest
from datetime import datetime

from src.dal.devices import get_device_by_id, insert_device
from src.models.device_factory import create_device


@pytest.fixture
def device_fixture():
    test_device = create_device(name="Device1",
                                description="Description of Device1",
                                address="192.168.1.100",
                                os_type="linux")
    yield test_device


def test_insert_and_find_device_by_id(device_fixture):
    test_device = device_fixture
    found_device = get_device_by_id(test_device.id)

    assert found_device.id == test_device.id
    assert found_device.name == test_device.name
    assert found_device.description == test_device.description
    assert found_device.address == test_device.address
    assert found_device.os_type == test_device.os_type
    assert found_device.last_scan_date == test_device.last_scan_date


def test_update_device(device_fixture):
    test_device = device_fixture
    pass


def test_remove_device(device_fixture):
    test_device = device_fixture
    pass


def test_insert_and_find_multiple_devices():
    pass
