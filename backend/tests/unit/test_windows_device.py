from datetime import datetime

from src.utils.config import config_manager
config_manager.get_config().MOCK_DB = True

from src.models.devices.device import Device
from src.models.devices.windows_device import WindowsDevice


def test_windows_device_data():
    windows_device: Device = WindowsDevice(
        name="test device",
        description="test device description",
        address="2.2.2.2",
        os_type="Windows",
        last_scan_date=datetime.now().replace(microsecond=0)
    )

    windows_device.data.description = "hi there"
    assert windows_device.data.description == "hi there"
