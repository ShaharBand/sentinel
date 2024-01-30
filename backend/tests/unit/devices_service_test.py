import unittest
from datetime import datetime

from backend.src.models.device import Device
from backend.src.models.devices.windows import WindowsDevice
from backend.src.services.devices import find_device_by_name


class DevicesServiceTest(unittest.TestCase):
    def find_device_by_name_test(self):
        windows_device: Device = WindowsDevice(name="test device",
                                               description="test device description",
                                               address="2.2.2.2",
                                               os_type="Windows",
                                               last_scan_date=datetime.now())
        windows_device.insert_into_db()
        look_for_device = find_device_by_name("test device", "Windows")
        windows_device.remove_from_db()

        print(f'look_for_device.data.address: {look_for_device.data.address}, '
              f'windows_device.data.address: {windows_device.data.address}')

        self.assertEqual(look_for_device.data.address, windows_device.data.address)


if __name__ == '__main__':
    unittest.main()
