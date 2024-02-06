from pydantic import BaseModel, StrictStr, IPvAnyAddress
from datetime import datetime


class UserData(BaseModel):
    id: int
    username: StrictStr
    password: StrictStr
    first_name: StrictStr
    last_name: StrictStr
    security_group: StrictStr
    registration_date: datetime
    last_login_ip: IPvAnyAddress
    last_login_date: datetime


class User:
    data: UserData

    def __init__(self, **args):
        self.data = UserData(**args)

    def insert_to_db(self):
        # TODO: Add logic to insert user data into db
        pass

    def update_db(self):
        # TODO: Add logic to update user data into db
        pass
