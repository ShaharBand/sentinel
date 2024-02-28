from datetime import datetime

from beanie import Document
from pydantic import Field, StrictStr, IPvAnyAddress

from src.utils.datetime_utils import default_datetime


class Device(Document):
    name: StrictStr
    os_type: StrictStr
    ip_address: IPvAnyAddress
    description: StrictStr
    last_update: datetime = Field(default_factory=default_datetime)
    registration_date: datetime = Field(default_factory=default_datetime)

    class Meta:
        collection_name = "device"

    def __repr__(self):
        return f'Device(id={self.id}, name={self.name}, os_type={self.os_type}, ip_address={self.ip_address})'



