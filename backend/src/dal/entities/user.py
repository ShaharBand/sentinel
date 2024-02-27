from sqlalchemy import Column, Integer, String, DateTime

from src.dal.db import Base


class User(Base):
    __tablename__ = 'users'

    id = Column(Integer, primary_key=True, autoincrement=True)
    username = Column(String(50))
    password = Column(String(50))
    first_name = Column(String(50))
    last_name = Column(String(50))
    registration_date = Column(DateTime)
    last_login_date = Column(DateTime)
    last_login_ip = Column(String(50))

    def __repr__(self):
        return f"<User(id={self.id}, username='{self.username}', full_name='{self.first_name} {self.last_name}')>"
