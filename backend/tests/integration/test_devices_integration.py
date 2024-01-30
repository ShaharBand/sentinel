import unittest
from datetime import datetime

from backend.src.models.device import Device
from backend.src.models.devices.windows import WindowsDevice
from backend.src.services.devices import find_device_by_name


class DevicesIntegrationTest(unittest.TestCase):
    def test_insert_and_find_device_by_name(self):
        # Create a device
        windows_device: Device = WindowsDevice(
            name="integration test device",
            description="integration test device description",
            address="2.2.2.2",
            os_type="Windows",
            last_scan_date=datetime.now().replace(microsecond=0)
        )

        # Insert the device into the database
        windows_device.insert_into_db()

        # Find the device by name
        look_for_device = find_device_by_name("integration test device", "Windows")

        # Remove the device from the database
        windows_device.remove_from_db()

        # Check if the inserted and retrieved devices are the same
        self.assertEqual(look_for_device.data, windows_device.data)


if __name__ == '__main__':
    unittest.main()
