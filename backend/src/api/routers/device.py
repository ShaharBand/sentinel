from beanie import PydanticObjectId
from fastapi import APIRouter

import src.api.controllers.device as device_controller
from src.dal.entities.device import Device

router = APIRouter(prefix="/device", tags=["device"])


@router.get("/")
async def read_devices() -> list[Device]:
    devices = await device_controller.get_all_devices()
    return devices


@router.get("/{device_id}")
async def read_device(device_id: PydanticObjectId) -> Device:
    device = await device_controller.get_device(device_id)
    return device
