from sqlalchemy import Column, String, Integer
from sqlalchemy.orm import relationship

from src.dal.db import Base


class WindowsDevice(Base):
    __tablename__ = 'windows_devices'
    id = Column(Integer, primary_key=True)
    device = relationship("Device", backref=__tablename__)

    # Windows-specific attributes
    windows_version = Column(String, nullable=False)
    windows_update_status = Column(String, nullable=False)

    def __repr__(self):
        return f'WindowsDevice(id={self.id}, windows_version={self.windows_version}, windows_update_status={self.windows_update_status})'
