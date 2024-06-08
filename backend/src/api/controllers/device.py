from beanie import PydanticObjectId

from src.api.models.device import DeviceModel
from src.dal.entities.device import Device


class DeviceController:

    @staticmethod
    async def get_all_devices() -> list[Device]:
        devices = await DeviceModel.get_all_devices()
        return devices

    @staticmethod
    async def get_device(device_id: PydanticObjectId) -> Device:
        device = await DeviceModel.get_device_by_id(device_id)
        return device
