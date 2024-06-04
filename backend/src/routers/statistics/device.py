from fastapi import APIRouter

from src.controllers.statistics.device import DeviceStatisticsController

router = APIRouter(prefix="/device", tags=["device"])


@router.get("/total-count")
async def read_total_count() -> int:
    total_count = await DeviceStatisticsController.get_devices_count()
    return total_count


@router.get("/os-distribution")
async def read_os_distribution() -> dict:
    os_distribution = DeviceStatisticsController.get_os_distribution()
    return os_distribution


@router.get("/security-software-coverage")
async def read_security_software_coverage() -> dict:
    security_software_coverage = DeviceStatisticsController.get_security_software_coverage()
    return security_software_coverage
