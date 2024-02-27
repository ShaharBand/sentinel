from src.dal.db import Database
from src.dal.entities.device import Device
from src.dal.entities.devices import *

DEVICE_CLASS_MAP = {
    "windows": WindowsDevice,
    "linux": LinuxDevice,
}


class DeviceFactory:
    @staticmethod
    def create_device(device_data: dict) -> tuple[Device, object]:
        os_type = device_data.pop('os_type').lower()
        if os_type in DEVICE_CLASS_MAP:
            device_class = DEVICE_CLASS_MAP[os_type]
            os_specific_data = {key: value for key, value in device_data.items() if hasattr(device_class, key)}
            device_data = {key: value for key, value in device_data.items() if key not in os_specific_data}

            os_instance = device_class(**os_specific_data)
            new_device_common = Device(**device_data)
            return new_device_common, os_instance
        return Device(**device_data), None


class DeviceRepository:
    def __init__(self):
        self.db = Database()

    def create_device(self, device_data: dict) -> Device:
        with self.db as session:
            new_device, os_instance = DeviceFactory.create_device(device_data)
            session.add(new_device)
            session.add(os_instance)
            session.commit()
            return new_device

    def get_device_by_id(self, device_id: int) -> Device:
        with self.db as session:
            return session.query(Device).filter_by(id=device_id).first()

    def get_all_devices(self) -> list[Device]:
        with self.db as session:
            return session.query(Device).all() or []

    def get_devices_by_os_type(self, os_type: str) -> list[Device]:
        with self.db as session:
            if os_type.lower() in DEVICE_CLASS_MAP:
                device_class = DEVICE_CLASS_MAP[os_type.lower()]
                return session.query(device_class).all()
        return []

    def update_device(self, device_id: int, updated_data: dict) -> bool:
        with self.db as session:
            device = session.query(Device).filter_by(id=device_id).first()
            if device:
                for key, value in updated_data.items():
                    setattr(device, key, value)
                session.commit()
                return True
        return False

    def remove_device_by_id(self, device_id: int) -> bool:
        with self.db as session:
            device = session.query(Device).filter_by(id=device_id).first()
            if device:
                session.delete(device)
                session.commit()
                return True
        return False
