from abc import ABC, abstractmethod

from pydantic import BaseModel, StrictStr, IPvAnyAddress
from datetime import datetime


class DeviceData(BaseModel):
    name: StrictStr
    description: StrictStr
    address: IPvAnyAddress
    os_type: StrictStr
    last_scan_date: datetime


class Device(ABC):
    data: DeviceData

    @abstractmethod
    def insert_into_db(self) -> bool:
        pass

    @abstractmethod
    def update_in_db(self) -> bool:
        pass

    @abstractmethod
    def remove_from_db(self) -> bool:
        pass

    @abstractmethod
    def ping(self) -> bool:
        pass

    @abstractmethod
    def scan(self) -> bool:
        pass

    @abstractmethod
    def get_data(self) -> dict:
        pass