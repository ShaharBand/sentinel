from src.models.device import Device


class WindowsDevice(Device):
    def data(self) -> str:
        pass

    def ping(self) -> bool:
        pass

    def scan(self) -> bool:
        pass
