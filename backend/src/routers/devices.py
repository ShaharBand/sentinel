from fastapi import APIRouter

from src.controllers.devices import DeviceController

router = APIRouter()
device_controller = DeviceController()


@router.get("/devices/", tags=["devices"])
async def read_devices():
    devices = device_controller.get_all_devices()
    return devices


@router.get("/devices/{device_id}", tags=["devices"])
async def read_device(device_id: int):
    device = device_controller.get_device(device_id)
    return device
