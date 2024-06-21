# TODO: statistics collection with a 24h cache
import src.api.models.device as device_model


async def get_devices_count() -> int:
    devices_count = await device_model.get_all_devices_count()
    return devices_count


def get_os_distribution() -> dict:
    # TODO: collect real data
    os_distribution = {
        "windows": 100,
        "macos": 50,
        "linux": 30
    }
    return os_distribution


def get_security_software_coverage() -> dict:
    # TODO: collect real data
    security_software_coverage = {
        "sentinel": 1200,
        "mcafee": 7100,
    }
    return security_software_coverage
