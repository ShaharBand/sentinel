from datetime import datetime

from beanie import Document
from pydantic import Field, StrictStr, SecretStr, IPvAnyAddress

from src.utils.datetime_utils import default_datetime


class User(Document):
    username: StrictStr
    password: SecretStr
    first_name: StrictStr
    last_name: StrictStr
    last_ip: IPvAnyAddress
    last_seen: datetime = Field(default_factory=default_datetime)
    registration_date: datetime = Field(default_factory=default_datetime)

    def __repr__(self):
        return f"<User(id={self.id}, username='{self.username}', last_seen='{self.last_seen}')>"
