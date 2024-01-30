from pydal import DAL, Field
from backend.src.utils.config import DB_URI

db = DAL(DB_URI)

db.define_table('devices',
                Field('name', 'string', length=128, required=True),
                Field('description', 'string', length=256),
                Field('address', 'string', length=128),
                Field('os_type', 'string', length=128),
                Field('last_scan_date', 'datetime'),
                migrate=False
                )
