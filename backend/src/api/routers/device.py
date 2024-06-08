from fastapi import APIRouter
from beanie import PydanticObjectId

from src.api.controllers.device import DeviceController
from src.dal.entities.device import Device


router = APIRouter(prefix="/device",
                   tags=["device"])


@router.get("/")
async def read_devices() -> list[Device]:
    devices = await DeviceController.get_all_devices()
    return devices


@router.get("/{device_id}")
async def read_device(device_id: PydanticObjectId) -> Device:
    device = await DeviceController.get_device(device_id)
    return device
