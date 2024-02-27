from sqlalchemy import Column, Integer, String, DateTime, ForeignKey
from sqlalchemy.orm import relationship

from src.dal.db import Base


class Device(Base):
    __tablename__ = 'devices'

    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    address = Column(String, nullable=False)
    os_type = Column(String, nullable=False)
    description = Column(String, nullable=False)
    last_update = Column(DateTime, nullable=True)

    os_id = Column(Integer, ForeignKey('os.id'))
    os = relationship("OS", back_populates=__tablename__)

    def __repr__(self):
        return f'Device(id={self.id}, name={self.name}, address={self.address}, os_type={self.os_type})'


class OS(Base):
    __tablename__ = 'os'

    id = Column(Integer, primary_key=True)
    type = Column(String)
    devices = relationship("Device", back_populates=__tablename__)

    def __repr__(self):
        return f"<OS(id={self.id}, type={self.type})>"
