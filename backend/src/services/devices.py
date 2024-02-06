from src.dal.devices import db
from src.models.device import Device
from src.models.devices.windows import WindowsDevice

# TODO: device_factory.py to be more open closed principle rather than each time telling device type based on OS.


def find_device_by_name(name: str, os_type: str) -> Device | None:
    query = (db.devices.name == name) & (db.devices.os_type == os_type)
    device_record = db(query).select().first()

    if device_record:
        if "windows" in device_record.os_type.lower():
            return WindowsDevice(**device_record)
    return None


def get_all_devices() -> list[Device] | None:
    devices = []
    query = db.devices.id > 0
    device_records = db(query).select()

    for device_record in device_records:
        if "windows" in device_record.os_type.lower():
            devices.append(WindowsDevice(**device_record))
        # elif "linux" in device_record.os_type.lower():
        #     devices.append(LinuxDevice(**device_record))
        # elif "mac" in device_record.os_type.lower():
        #     devices.append(MacDevice(**device_record))

    if devices:
        return devices
    return None

