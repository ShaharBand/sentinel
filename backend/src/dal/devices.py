from pydal import DAL, Field

from src.utils.config import db_uri

db = DAL(db_uri, migrate=False)

db.define_table('devices',
                Field('id', 'id'),
                Field('name', 'string', length=128, required=True),
                Field('description', 'string', length=256),
                Field('address', 'string', length=128),
                Field('os_type', 'string', length=128),
                Field('last_scan_date', 'datetime')
                )
