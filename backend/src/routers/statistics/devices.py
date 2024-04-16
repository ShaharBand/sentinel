from fastapi import APIRouter

from src.controllers.statistics.devices import DevicesStatisticsController

router = APIRouter(prefix="/devices", tags=["devices"])
devices_statistics_controller = DevicesStatisticsController()


@router.get("/total-count")
async def read_total_count() -> int:
    total_count = await devices_statistics_controller.get_devices_count()
    return total_count


@router.get("/os-distribution")
async def read_os_distribution() -> dict:
    os_distribution = devices_statistics_controller.get_os_distribution()
    return os_distribution


@router.get("/security-software-coverage")
async def read_security_software_coverage() -> dict:
    security_software_coverage = devices_statistics_controller.get_security_software_coverage()
    return security_software_coverage
