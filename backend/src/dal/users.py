from pydal import DAL, Field
from backend.src.utils.config import DB_URI

db = DAL(DB_URI, migrate=False)

db.define_table('users',
                Field('username', 'string', length=128, required=True),
                Field('password', 'password', length=128, required=True),

                Field('registration_date', 'datetime'),
                Field('last_login_date', 'datetime'),
                Field('last_login_ip', 'string', length=128),

                Field('first_name', 'string', length=128),
                Field('last_name', 'string', length=128),
                Field('access_level', 'integer'),

                migrate=False
                )
