import os

from sqlalchemy import create_engine, MetaData

from src.dal.tables import users, devices
from src.dal.transaction_manager import TransactionManager


class Schema:
    def __init__(self):
        self.engine = create_engine(os.getenv("DB_URI"), echo=True, future=True)
        self.metadata = MetaData()
        self.tables = self.__generate_tables()

    def create_transaction(self):
        return TransactionManager(self)

    def create_all_tables(self):
        self.metadata.create_all(self.engine)

    def drop_all_tables(self):
        self.metadata.drop_all(self.engine)

    def __generate_tables(self):
        return {
            'devices': devices.__table__,
            'users': users.__table__,
        }
