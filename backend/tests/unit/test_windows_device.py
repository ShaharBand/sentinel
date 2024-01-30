import unittest
from datetime import datetime

from backend.src.models.device import Device
from backend.src.models.devices.windows import WindowsDevice


class DevicesServiceTest(unittest.TestCase):
    def test_windows_device_data(self):
        # Create a device
        windows_device: Device = WindowsDevice(name="test device",
                                               description="test device description",
                                               address="2.2.2.2",
                                               os_type="Windows",
                                               last_scan_date=datetime.now().replace(microsecond=0))

        windows_device.data.description = "hi there"
        self.assertEqual(windows_device.data.description, "hi there")


if __name__ == '__main__':
    unittest.main()
