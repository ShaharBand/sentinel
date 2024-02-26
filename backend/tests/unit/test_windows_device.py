import pytest
from datetime import datetime

from src.models.device import Device
from src.models.devices.windows_device import WindowsDevice


@pytest.fixture
def windows_device():
    return WindowsDevice(
        name="Device 1",
        description="Description of Device 1",
        address="192.168.1.1",
        os_type="Windows",
        last_scan_date=datetime.now().replace(microsecond=0)
    )


def test_windows_device_data(windows_device):
    assert isinstance(windows_device, Device)


def test_change_description(windows_device):
    original_description = windows_device.description

    new_description = "New description"
    windows_device.description = new_description

    assert windows_device.description == new_description
    assert windows_device.description != original_description
