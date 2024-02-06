from functools import lru_cache

from pydal import DAL, Field

from src.utils.config import db_uri, config


@lru_cache()
def setup_db():
    if config.MOCK_DB:
        database = DAL('sqlite://mock.db', migrate=True)
    else:
        database = DAL(db_uri, migrate=False)

    database.define_table('devices',
                          Field('id', 'id'),
                          Field('name', 'string', length=128, required=True),
                          Field('description', 'string', length=256),
                          Field('address', 'string', length=128),
                          Field('os_type', 'string', length=128),
                          Field('last_scan_date', 'datetime')
                          )
    return database


db = setup_db()  # TODO: class to fetch db because the current implementation is weird on imports.
