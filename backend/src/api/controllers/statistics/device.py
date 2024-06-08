# TODO: statistics collection with a 24h cache
from src.api.models.device import DeviceModel


class DeviceStatisticsController:
    @staticmethod
    async def get_devices_count() -> int:
        devices = await DeviceModel.get_all_devices()
        return len(devices)

    @staticmethod
    def get_os_distribution() -> dict:
        # TODO: collect real data
        os_distribution = {
            "windows": 100,
            "macos": 50,
            "linux": 30
        }
        return os_distribution

    @staticmethod
    def get_security_software_coverage() -> dict:
        # TODO: collect real data
        security_software_coverage = {
            "sentinel": 1200,
            "mcafee": 7100,
        }
        return security_software_coverage
