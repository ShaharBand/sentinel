from abc import ABC
from datetime import datetime

from pydantic import StrictStr, IPvAnyAddress

from src.dal.devices import db
from src.models.devices.device import Device, DeviceData


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

        self._id = self._get_id_from_db()  # TODO: i dont like this needs a logic change

    @property
    def data(self) -> WindowsData:
        return self._data

    @property
    def id(self) -> int | None:
        """
        Get the ID of the Windows device.
        """
        return self._id

    def _get_id_from_db(self) -> int | None:
        """
        Retrieve the ID of the Windows device from the database.
        """
        # TODO: for multiple names support i need to change this logic to id
        query = (db.devices.name == self.data.name)
        device_record = db(query).select().first()
        return device_record.id if device_record else None

    def save_to_db(self) -> bool:
        """
        Save the Windows device data to the database.
        Inserts if the device doesn't exist, otherwise updates.
        Returns True if successful, False otherwise.
        """
        query = (db.devices.id == self.id)
        existing_device = db(query).select().first()

        if existing_device:
            updated_rows = db(query).update(
                description=self.data.description,
                address=self.data.address,
                os_type=self.data.os_type,
                last_scan_date=self.data.last_scan_date
            )
            db.commit()
            return updated_rows > 0
        else:
            inserted_id = db.devices.insert(**dict(self.data))
            self._id = inserted_id  # TODO: once id implementation is changed i need to change this
            db.commit()

            return bool(inserted_id)

    def remove_from_db(self) -> bool:
        """
        Remove the Windows device data from the database.
        Returns True if successful, False otherwise.
        """
        query = (db.devices.id == self.id)
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
        return f"id: {self._id}, name: {self.data.name}, os_type: {self.data.os_type}, address: {self.data.address}"
