from beanie import PydanticObjectId

import src.api.models.device as device_model
from src.dal.entities.device import Device


async def get_all_devices() -> list[Device]:
    devices = await device_model.get_all_devices()
    return devices


async def get_device(device_id: PydanticObjectId) -> Device:
    device = await device_model.get_device_by_id(device_id)
    return device
