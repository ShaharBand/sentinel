from src.models.devices.device import Device
from src.models.devices.windows_device import WindowsDevice


class DeviceFactory:
    @staticmethod
    def create_device(device_record: dict) -> Device | None:
        os_type = device_record.get('os_type', '').lower()
        if "windows" in os_type:
            return WindowsDevice(**device_record)
        # elif "linux" in os_type:
        #     return LinuxDevice(**device_record)
        # elif "mac" in os_type:
        #     return MacDevice(**device_record)
        return None
