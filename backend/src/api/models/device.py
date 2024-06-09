from beanie import PydanticObjectId

from src.dal.entities.device import Device
from src.dal.repositories.device import DeviceRepository


class DeviceModel:
    @staticmethod
    async def create_device(device_data: dict) -> Device:
        return await DeviceRepository.create_device(device_data)

    @staticmethod
    async def get_device_by_id(device_id: PydanticObjectId) -> Device:
        return await DeviceRepository.get_device_by_id(device_id)

    @staticmethod
    async def get_all_devices() -> list[Device]:
        return await DeviceRepository.get_all_devices()

    @staticmethod
    async def get_devices_by_os_type(os_type: str) -> list[Device]:
        return await DeviceRepository.get_devices_by_os_type(os_type)

    @staticmethod
    async def update_device(device_id: PydanticObjectId, updated_data: dict) -> bool:
        return await DeviceRepository.update_device(device_id, updated_data)

    @staticmethod
    async def remove_device_by_id(device_id: PydanticObjectId) -> bool:
        return await DeviceRepository.remove_device_by_id(device_id)
