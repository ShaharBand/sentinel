from typing import List

from backend.src.dal.devices import db
from backend.src.models.device import DeviceData


"""
maybe holding in the memory a list of all loaded devices can be profitable instead of querying the db
and updating such list at need.
"""


def find_device_by_name(name: str, os_type: str) -> DeviceData | None:
    query = (db.device.name == name) & (db.device.os_type == os_type)
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


def get_all_devices() -> List:
    pass
