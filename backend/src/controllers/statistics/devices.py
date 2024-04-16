# TODO: statistics collection with a dal and model to save on expensive calculations
from src.models.device import DeviceModel


class DevicesStatisticsController:
    def __init__(self):
        self.device_model = DeviceModel()

    async def get_devices_count(self) -> int:
        devices = await self.device_model.get_all_devices()
        return len(devices)

    def get_os_distribution(self) -> dict:
        # TODO: collect real data
        os_distribution = {
            "windows": 100,
            "macos": 50,
            "linux": 30
        }
        return os_distribution

    def get_security_software_coverage(self) -> dict:
        # TODO: collect real data
        security_software_coverage = {
            "sentinel": 1200,
            "mcafee": 7100,
        }
        return security_software_coverage
