from fastapi import APIRouter

from .device import router as devices_statistics_router

router = APIRouter(prefix="/statistics",
                   tags=["statistics"])

router.include_router(devices_statistics_router)
