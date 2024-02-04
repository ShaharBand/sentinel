from backend.src.dal.devices import db
from backend.src.models.device import Device
from backend.src.models.devices.windows import WindowsDevice


def find_device_by_name(name: str, os_type: str) -> Device | None:
    query = (db.devices.name == name) & (db.devices.os_type == os_type)
    device_record = db(query).select().first()

    if device_record:
        if "windows" in device_record.os_type.lower():
            return WindowsDevice(**device_record)
    return None


def get_all_devices() -> list[Device] | None:
    # TODO: Add logic to retrieve all devices
    pass
