from sqlalchemy import Column, String, Integer
from sqlalchemy.orm import relationship

from src.dal.db import Base


class LinuxDevice(Base):
    __tablename__ = 'linux_devices'
    id = Column(Integer, primary_key=True)
    device = relationship("Device", backref=__tablename__)

    # Linux-specific attributes
    linux_distribution = Column(String, nullable=False)
    linux_kernel_version = Column(String, nullable=False)

    def __repr__(self):
        return f'LinuxDevice(id={self.id}, linux_distribution={self.linux_distribution}, linux_kernel_version={self.linux_kernel_version})'
