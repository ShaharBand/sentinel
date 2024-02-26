from abc import ABC, abstractmethod

from sqlalchemy import Column, Integer, String, DateTime
from sqlalchemy.orm import declarative_base

Base = declarative_base()


class Device(Base):
    __tablename__ = 'devices'

    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    description = Column(String, nullable=False)
    address = Column(String, nullable=False)
    os_type = Column(String, nullable=False)
    last_scan_date = Column(DateTime, nullable=True)

    @abstractmethod
    def data(self) -> str:
        pass

    @abstractmethod
    def ping(self) -> bool:
        pass

    @abstractmethod
    def scan(self) -> bool:
        pass

    def __str__(self):
        return f'Device(id={self.id}, name={self.name})'
