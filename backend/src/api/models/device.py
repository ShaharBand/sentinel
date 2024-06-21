from beanie import PydanticObjectId

from src.dal.entities.device import Device
import src.dal.repositories.device as device_repository


async def create_device(device_data: dict) -> Device:
    return await device_repository.create_device(device_data)


async def get_device_by_id(device_id: PydanticObjectId) -> Device:
    return await device_repository.get_device_by_id(device_id)


async def get_all_devices() -> list[Device]:
    return await device_repository.get_all_devices()


async def get_all_devices_count() -> int:
    return await device_repository.get_all_devices_count()


async def get_devices_by_os_type(os_type: str) -> list[Device]:
    return await device_repository.get_devices_by_os_type(os_type)


async def update_device(device_id: PydanticObjectId, updated_data: dict) -> bool:
    return await device_repository.update_device(device_id, updated_data)


async def remove_device_by_id(device_id: PydanticObjectId) -> bool:
    return await device_repository.remove_device_by_id(device_id)
