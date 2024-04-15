from fastapi import APIRouter

from src.controllers.statistics import StatisticsController

router = APIRouter(prefix="/devices", tags=["devices"])
statistics_controller = StatisticsController()


@router.get("/os-distribution")
async def read_os_distribution() -> dict:
    os_distribution_statistics = {
        "windows": 100,
        "macos": 50,
        "linux": 30
    }
    # TODO: controller fetch instead
    return os_distribution_statistics
