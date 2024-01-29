from abc import ABC, abstractmethod
from typing import List

from pydantic import BaseModel, StrictStr, IPvAnyAddress
from datetime import datetime

from dal.device import db


class DeviceData(BaseModel):
    name: StrictStr
    description: StrictStr
    address: IPvAnyAddress
    os_type: StrictStr
    last_scan_date: datetime


class Device(ABC):
    data: DeviceData

    @abstractmethod
    def ping(self) -> bool:
        pass

    @abstractmethod
    def scan(self) -> bool:
        pass

    @abstractmethod
    def get_data(self) -> dict:
        pass

    @classmethod
    def find_device_by_name(cls, name: str) -> DeviceData:
        query = (db.device.name == name) & (db.device.os_type == "Windows")
        device_record = db(query).select().first()

        if device_record:
            data = DeviceData(
                name=device_record.name,
                description=device_record.description,
                address=device_record.address,
                os_type=device_record.os_type,
                last_scan_date=device_record.last_scan_date)
            return data
        else:
            return None

    @classmethod
    @abstractmethod
    def get_all_devices(cls) -> List:
        pass
