from abc import ABC, abstractmethod
from typing import TypeVar, Generic

from pydantic import BaseModel, StrictStr, IPvAnyAddress
from datetime import datetime

T = TypeVar('T', bound=BaseModel)


class DeviceData(BaseModel):
    name: StrictStr
    description: StrictStr
    address: IPvAnyAddress
    os_type: StrictStr
    last_scan_date: datetime


class Device(Generic[T], ABC):
    @property
    @abstractmethod
    def data(self) -> T:
        pass

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
