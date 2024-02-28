from beanie import PydanticObjectId

from src.models.device import DeviceModel


class DeviceController:
    def __init__(self):
        self.device_model = DeviceModel()

    async def get_all_devices(self):
        devices = await self.device_model.get_all_devices()
        return devices

    async def get_device(self, device_id: PydanticObjectId):
        device = await self.device_model.get_device_by_id(device_id)
        return device
