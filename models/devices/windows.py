import subprocess
from abc import ABC
from datetime import datetime

from pydantic import StrictStr, IPvAnyAddress

from dal.device import db
from models.device import Device, DeviceData


class WindowsData(DeviceData):
    name: StrictStr
    description: StrictStr
    address: IPvAnyAddress
    os_type: StrictStr = "Windows"
    last_scan_date: datetime


class WindowsDevice(Device, ABC):
    data: WindowsData

    def __init__(self, **args):
        self.data = WindowsData(**args)

    def insert_into_db(self) -> bool:
        # Attempt to insert data into the database
        inserted_id = db.device.insert(
            name=self.data.name,
            description=self.data.description,
            address=str(self.data.address),
            os_type=self.data.os_type,
            last_scan_date=self.data.last_scan_date
        )

        # Check if the insertion was successful
        if inserted_id:
            db.commit()
            return True
        else:
            return False

    def update_in_db(self) -> bool:
        # Attempt to update data in the database based on the device's name
        updated_rows = db(db.device.name == self.data.name).update(
            description=self.data.description,
            address=str(self.data.address),
            os_type=self.data.os_type,
            last_scan_date=self.data.last_scan_date
        )

        # Check if the update was successful
        if updated_rows > 0:
            db.commit()  # Commit changes to the database
            return True
        else:
            return False

    def ping(self) -> bool:
        try:
            result = subprocess.run(["ping", "-n", "1", str(self.data.address)], capture_output=True, text=True,
                                    timeout=5)
            return "Reply from" in result.stdout
        except subprocess.TimeoutExpired:
            return False

    def scan(self) -> bool:
        pass

    def get_data(self) -> dict:
        pass

    def __str__(self):
        return f"name: {self.data.name}, os_type: {self.data.os_type}, address: {self.data.address}"
