from pydal import DAL, Field

from backend.src.utils.config import db_uri

db = DAL(db_uri, migrate=False)

db.define_table('users',
                Field('username', 'string', length=128, required=True),
                Field('password', 'password', length=128, required=True),
                Field('first_name', 'string', length=128),
                Field('last_name', 'string', length=128),
                Field('security_group', 'string', length=128),
                Field('registration_date', 'datetime'),
                Field('last_login_date', 'datetime'),
                Field('last_login_ip', 'string', length=128),
                migrate=False
                )
