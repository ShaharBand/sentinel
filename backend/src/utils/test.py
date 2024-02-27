from src.dal.repositories.device import DeviceRepository

device_data = {
    'name': 'MyDevice',
    'address': '192.168.1.1',
    'os_type': 'windows',
    'description': 'This is a test device',
    'windows_version': 'Windows 10',
    'windows_update_status': 'Updated'
}

new_device = DeviceRepository().create_device(device_data)
print(new_device)
