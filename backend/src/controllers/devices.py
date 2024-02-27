from src.models.device import DeviceModel


class DeviceController:
    def __init__(self):
        self.device_model = DeviceModel()

    def get_all_devices(self):
        devices = self.device_model.get_all_devices()
        return devices

    def get_device(self, device_id: int):
        device = self.device_model.get_device_by_id(device_id)
        return device
