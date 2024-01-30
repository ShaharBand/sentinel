import datetime

from models.device import Device
from models.devices.windows import WindowsDevice

device: Device = WindowsDevice(name="test",
                               description="bingo dingo",
                               address="0.0.0.0",
                               os_type="Windows (2009)",
                               last_scan_date=datetime.datetime.now())
print(device)
