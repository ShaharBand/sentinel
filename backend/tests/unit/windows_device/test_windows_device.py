import pytest
from pydantic import ValidationError

from src.dal.entities.devices.windows import WindowsDevice
from src.middleware.db import init_db
from src.models.device import DeviceModel

from fixtures import windows_device_data, missing_required_fields_device, invalid_windows_device


@pytest.mark.asyncio
async def test_windows_device_creation(windows_device_data):
    await init_db()
    device = await DeviceModel().create_device(windows_device_data)
    assert isinstance(device, WindowsDevice)


@pytest.mark.asyncio
async def test_missing_required_fields(missing_required_fields_device):
    await init_db()
    with pytest.raises(ValueError):
        await DeviceModel().create_device(missing_required_fields_device)


@pytest.mark.asyncio
async def test_invalid_field_types(invalid_windows_device):
    await init_db()
    with pytest.raises(ValidationError):
        await DeviceModel().create_device(invalid_windows_device)
