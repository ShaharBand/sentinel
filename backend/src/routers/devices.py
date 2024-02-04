from fastapi import APIRouter

router = APIRouter()


@router.get("/devices/", tags=["devices"])
async def read_devices():
    # TODO: Add logic to retrieve and return all devices
    pass


@router.get("/devices/{device}", tags=["devices"])
async def read_device(device: str):
    # TODO: Add logic to retrieve and return a device based on the provided device name
    pass
