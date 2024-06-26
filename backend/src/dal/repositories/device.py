from beanie import PydanticObjectId

from src.dal.entities.device import Device
from src.dal.entities.devices.linux import LinuxDevice
from src.dal.entities.devices.windows import WindowsDevice

DEVICE_NAME_TO_TYPE = {
    "windows": WindowsDevice,
    "linux": LinuxDevice,
}


def device_factory(device_data: dict) -> Device:
    os_type = device_data.get('os_type').lower()
    if os_type in DEVICE_NAME_TO_TYPE:
        device = DEVICE_NAME_TO_TYPE.get(os_type)(**device_data)
        return device
    return Device(**device_data)


async def create_device(device_data: dict) -> Device:
    new_device = device_factory(device_data)
    await new_device.insert()
    return new_device


async def get_device_by_id(device_id: PydanticObjectId) -> Device:
    return await Device.get(device_id)


async def get_all_devices() -> list[Device]:
    return await Device.find_all().to_list()


async def get_all_devices_count() -> int:
    return await Device.find_all().count()


async def get_devices_by_os_type(os_type: str) -> list[Device]:
    # TODO: testing this will be required i am not sure
    if os_type.lower() in DEVICE_NAME_TO_TYPE:
        device_class = DEVICE_NAME_TO_TYPE[os_type.lower()]
        return await device_class.find().to_list()
    return []


async def update_device(device_id: PydanticObjectId, updated_data: dict) -> bool:
    device = await Device.get(device_id)
    if device:
        for key, value in updated_data.items():
            device[key] = value
        await device.update()
        return True
    return False


async def remove_device_by_id(device_id: PydanticObjectId) -> bool:
    device = await Device.get(device_id)
    if device:
        await device.delete()
        return True
    return False
