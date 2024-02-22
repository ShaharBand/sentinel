from src.dal.tables.devices import db
from src.models.devices.device import Device
from src.models.devices.device_factory import DeviceFactory


def find_device_by_id(device_id: int) -> Device | None:
    query = (db.devices.id == device_id)
    device_record = db(query).select().first()
    return DeviceFactory.create_device({**device_record}) if device_record else None


def find_device_by_name(name: str) -> list[Device]:
    query = (db.devices.name == name)
    device_records = db(query).select()

    devices = []
    for device_record in device_records:
        devices.append(DeviceFactory.create_device({**device_record}))

    return devices


def get_all_devices() -> list[Device]:
    query = db.devices.id > 0
    device_records = db(query).select()

    devices = []
    for device_record in device_records:
        devices.append(DeviceFactory.create_device({**device_record}))

    return devices
