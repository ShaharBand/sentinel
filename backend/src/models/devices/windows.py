from abc import ABC
from datetime import datetime

from pydantic import StrictStr, IPvAnyAddress

from src.dal.devices import db
from src.models.device import Device, DeviceData


class WindowsData(DeviceData):
    name: StrictStr
    description: StrictStr
    address: IPvAnyAddress
    os_type: StrictStr = "Windows"
    last_scan_date: datetime


class WindowsDevice(Device[DeviceData], ABC):
    def __init__(self, device_data: WindowsData = None, **kwargs):
        if device_data is not None:
            self._data = device_data
        else:
            self._data = WindowsData(**kwargs)

    @property
    def data(self) -> WindowsData:
        return self._data

    def insert_into_db(self) -> bool:
        """
        Insert the Windows device data into the database.
        Returns True if successful, False otherwise.
        """
        inserted_id = db.devices.insert(
            name=self.data.name,
            description=self.data.description,
            address=self.data.address,
            os_type=self.data.os_type,
            last_scan_date=self.data.last_scan_date
        )
        db.commit()
        return bool(inserted_id)

    def update_in_db(self) -> bool:
        """
        Update the Windows device data in the database.
        Returns True if successful, False otherwise.
        """
        query = (db.devices.name == self.data.name)
        updated_rows = db(query).update(
            description=self.data.description,
            address=self.data.address,
            os_type=self.data.os_type,
            last_scan_date=self.data.last_scan_date
        )
        db.commit()
        return updated_rows > 0

    def remove_from_db(self) -> bool:
        """
        Remove the Windows device data from the database.
        Returns True if successful, False otherwise.
        """
        query = (db.devices.name == self.data.name)
        deleted_rows = db(query).delete()
        db.commit()
        return bool(deleted_rows)

    def ping(self) -> bool:
        # TODO: Implement ping logic
        pass

    def scan(self) -> bool:
        # TODO: Implement scan logic
        pass

    def __str__(self):
        return f"name: {self.data.name}, os_type: {self.data.os_type}, address: {self.data.address}"
