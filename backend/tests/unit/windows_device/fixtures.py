import datetime

import pytest


@pytest.fixture
def windows_device_data():
    return {
        'name': 'shahar-pc',
        'os_type': 'windows',
        'ip_address': '127.0.0.1',
        'description': 'unit test device',
        'last_update': datetime.datetime.now(),
        'registration_date': datetime.datetime.now(),
        'windows_version': '1',
        'windows_update_status': '2'
    }


@pytest.fixture
def invalid_windows_device():
    return {
        'name': 'shahar-pc',
        'os_type': 'windows',
        'ip_address': '127.0.0.1',
        'description': 'unit test device',
        'last_update': '2024-04-21',  # Should be datetime object
        'registration_date': '2024-04-21',  # Should be datetime object
        'windows_version': 1,  # Should be string
        'windows_update_status': 2  # Should be string
    }


@pytest.fixture
def missing_required_fields_device():
    return {
        'os_type': 'windows',
        'ip_address': '127.0.0.1',
        # Missing 'name', 'description', 'last_update', 'registration_date', 'windows_version', 'windows_update_status'
    }
