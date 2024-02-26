from src.dal.devices import insert_device, get_last_device_id
from src.models.device import Device
from src.models.devices import *

DEVICE_CLASS_MAP = {
    "windows": WindowsDevice,
    "linux": LinuxDevice,
}


def create_device(**kwargs) -> Device:
    """
    Create a new device based on the provided keyword arguments and insert it into the db.

    :param kwargs: Keyword arguments containing device attributes.
    :return: The created device object.
    """
    os_type = kwargs.get("os_type", "").lower()
    if os_type:
        last_device_id = get_last_device_id()
        new_device_id = last_device_id + 1 if last_device_id is not None else 1
        kwargs['id'] = new_device_id

        device = DEVICE_CLASS_MAP[os_type](**kwargs)
        insert_device(device)

        return device
    else:
        raise ValueError("Unsupported OS type")
