from beanie import PydanticObjectId
from fastapi import APIRouter

from src.controllers.devices import DeviceController

router = APIRouter(prefix="/devices",
                   tags=["devices"],
                   responses={404: {"description": "Not found"}})
device_controller = DeviceController()


@router.get("/")
async def read_devices():
    devices = await device_controller.get_all_devices()
    return devices


@router.get("/{device_id}")
async def read_device(device_id: PydanticObjectId):
    device = await device_controller.get_device(device_id)
    return device
