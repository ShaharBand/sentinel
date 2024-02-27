from src.dal.entities.device import Device
from src.dal.repositories.device import DeviceRepository


class DeviceModel:
    def __init__(self):
        self.device_repo = DeviceRepository()

    def create_device(self, device_data: dict) -> Device:
        return self.device_repo.create_device(device_data)

    def get_device_by_id(self, device_id: int) -> Device:
        return self.device_repo.get_device_by_id(device_id)

    def get_all_devices(self) -> list[Device]:
        return self.device_repo.get_all_devices()

    def get_devices_by_os_type(self, os_type: str) -> list[Device]:
        return self.device_repo.get_devices_by_os_type(os_type)

    def update_device(self, device_id: int, updated_data: dict) -> bool:
        return self.device_repo.update_device(device_id, updated_data)

    def remove_device_by_id(self, device_id: int) -> bool:
        return self.device_repo.remove_device_by_id(device_id)
