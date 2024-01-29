import subprocess
from abc import ABC
from datetime import datetime

from pydantic import StrictStr, IPv4Address, BaseModel

from models.device import Device


class WindowsData(BaseModel):
    name: StrictStr
    description: StrictStr
    address: IPv4Address
    os_type: StrictStr = "Windows"
    last_scan_date: datetime


class WindowsDevice(Device, ABC):
    data: WindowsData

    def ping(self) -> bool:
        try:
            result = subprocess.run(["ping", "-n", "1", str(self.data.address.ip)], capture_output=True, text=True, timeout=5)
            return "Reply from" in result.stdout
        except subprocess.TimeoutExpired:
            return False

    def scan(self) -> bool:
        pass

    def get_data(self) -> dict:
        pass
