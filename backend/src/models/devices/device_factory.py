from src.models.devices.device import Device
from src.models.devices.windows_device import WindowsDevice

DEVICE_CLASS_MAP = {
    "windows": WindowsDevice,
    # "linux": LinuxDevice,
}


class DeviceFactory:
    @staticmethod
    def create_device(device_record: dict) -> Device | None:
        os_type = device_record.get("os_type", "").lower()
        device_class = DEVICE_CLASS_MAP.get(os_type)
        return device_class(**device_record) if device_class else None
