from src.dal.db import Database
from src.models.device import Device


def insert_device(device_data: Device):
    with Database() as session:
        session.add(device_data)
        session.commit()
        session.refresh(device_data)
    return None


def get_last_device_id() -> int:
    with Database() as session:
        last_device_id = session.query(Device.id).order_by(Device.id.desc()).first()
        return last_device_id[0] if last_device_id else None


def get_all_devices() -> list[Device] | None:
    with Database() as session:
        return session.query(Device).all()


def get_device_by_id(device_id: int) -> Device | None:
    # TODO: (maybe) support devices sub classes like factory pattern..
    with Database() as session:
        return session.query(Device).filter_by(id=device_id).first()


def update_device_address(device: Device, new_address: str):
    with Database() as session:
        device.address = new_address
        session.commit()


def delete_device(device: Device):
    with Database() as session:
        session.delete(device)
        session.commit()
