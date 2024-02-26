from src.models.device import Device


class LinuxDevice(Device):
    def data(self) -> str:
        pass

    def ping(self) -> bool:
        pass

    def scan(self) -> bool:
        pass
