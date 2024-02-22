from sqlalchemy import DateTime, Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base

from src.dal.base_repo import BaseRepo

Base = declarative_base()


class Users(Base):
    __tablename__ = 'users'

    id = Column(Integer, primary_key=True, autoincrement=True)
    username = Column(String(50))
    password = Column(String(50))
    first_name = Column(String(50))
    last_name = Column(String(50))
    security_group = Column(String(50))
    registration_date = Column(DateTime)
    last_login_date = Column(DateTime)
    last_login_ip = Column(String(50))


class UsersRepo(BaseRepo):
    def _get_table(self):
        return self.schema.tables['users']
