import datetime

import pytest

DEFAULT_IP_ADDRESS = '127.0.0.1'
DEFAULT_DEVICE_NAME = 'shahar-pc'
DEFAULT_DESCRIPTION = 'unit test device'
DEFAULT_WINDOWS_VERSION = '10'
DEFAULT_WINDOWS_UPDATE_STATUS = 'Up to date'


@pytest.fixture
def windows_device_data() -> dict[str, any]:
    """Fixture for valid Windows device data."""
    return {
        'name': DEFAULT_DEVICE_NAME,
        'os_type': 'windows',
        'ip_address': DEFAULT_IP_ADDRESS,
        'description': DEFAULT_DESCRIPTION,
        'last_update': datetime.datetime.now(),
        'registration_date': datetime.datetime.now(),
        'windows_version': DEFAULT_WINDOWS_VERSION,
        'windows_update_status': DEFAULT_WINDOWS_UPDATE_STATUS
    }


@pytest.fixture
def invalid_windows_device() -> dict[str, any]:
    """Fixture for invalid Windows device data."""
    return {
        'name': DEFAULT_DEVICE_NAME,
        'os_type': 'windows',
        'ip_address': DEFAULT_IP_ADDRESS,
        'description': DEFAULT_DESCRIPTION,
        'last_update': '2024-04-21',  # Should be datetime object
        'registration_date': '2024-04-21',  # Should be datetime object
        'windows_version': 1,  # Should be string
        'windows_update_status': 2  # Should be string
    }


@pytest.fixture
def missing_required_fields_device() -> dict[str, any]:
    """Fixture for Windows device data with missing required fields."""
    return {
        'os_type': 'windows',
        'ip_address': DEFAULT_IP_ADDRESS,
        # Missing 'name', 'description', 'last_update', 'registration_date', 'windows_version', 'windows_update_status'
    }
