from datetime import datetime

from beanie import Document
from pydantic import StrictStr


class User(Document):
    username: StrictStr
    hashed_password: StrictStr
    last_seen: datetime
    registration_date: datetime

    def __repr__(self):
        return f"<User(id={self.id}, username='{self.username}', last_seen='{self.last_seen}')>"
