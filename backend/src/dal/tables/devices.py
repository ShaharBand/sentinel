from sqlalchemy import Column, Integer, String, DateTime
from sqlalchemy.ext.declarative import declarative_base

from src.dal.base_repo import BaseRepo

Base = declarative_base()


class Devices(Base):
    __tablename__ = 'devices'

    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    description = Column(String, nullable=False)
    address = Column(String, nullable=False)
    os_type = Column(String, nullable=False)
    last_scan_date = Column(DateTime, nullable=True)


class DevicesRepo(BaseRepo):
    def _get_table(self):
        return self.schema.tables['devices']
