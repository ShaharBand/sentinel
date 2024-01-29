from pydal import DAL, Field

db = DAL('postgres://mdipierro:password@localhost/test')

db.define_table('device',
                Field('name', 'string', length=128, required=True),
                Field('description', 'string', length=256),
                Field('address', 'string', length=128),
                Field('os_type', 'string', length=128),
                Field('last_scan_date', 'datetime')
                )
