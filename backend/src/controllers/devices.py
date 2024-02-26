from src.dal.devices import get_all_devices, get_device_by_id


def devices_list():
    devices = get_all_devices()
    return devices


def device_data(device_id: int):
    device = get_device_by_id(device_id)
    return device
