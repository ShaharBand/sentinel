from pydantic import BaseModel, StrictStr, IPvAnyAddress
from datetime import datetime


class UserData(BaseModel):
    # Credentials
    username: StrictStr
    password: StrictStr

    # Profile Data
    first_name: StrictStr
    last_name: StrictStr
    security_group: StrictStr

    # Log Data
    registration_date: datetime
    last_login_ip: IPvAnyAddress
    last_login_date: datetime


class User:
    data: UserData

    def __init__(self, **args):
        self.data = UserData(**args)

    def insert_to_db(self):
        pass

    def update_db(self):
        pass
