from fastapi import APIRouter

from src.controllers.devices import *

router = APIRouter()


@router.get("/devices/", tags=["devices"])
async def read_devices():
    devices = devices_list()
    return devices


@router.get("/devices/{device_id}", tags=["devices"])
async def read_device(device_id: int):
    device = device_data(device_id)
    return device
