from datetime import datetime
from src.models.devices.device import Device
from src.models.devices.windows_device import WindowsDevice
from src.utils.config import config

config.MOCK_DB = True


def test_windows_device_data():
    windows_device: Device = WindowsDevice(
        id=1,
        name="test device",
        description="test device description",
        address="2.2.2.2",
        os_type="Windows",
        last_scan_date=datetime.now().replace(microsecond=0)
    )

    windows_device.data.description = "hi there"
    assert windows_device.data.description == "hi there"
