from fastapi import APIRouter

router = APIRouter()


@router.get("/devices/", tags=["devices"])
async def read_devices():
    pass


@router.get("/devices/{device}", tags=["devices"])
async def read_device(device: str):
    pass
