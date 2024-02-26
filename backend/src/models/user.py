from sqlalchemy import Column, Integer, String, DateTime
from sqlalchemy.orm import declarative_base

Base = declarative_base()


class User(Base):
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
