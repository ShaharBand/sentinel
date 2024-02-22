from abc import ABC, abstractmethod
from sqlalchemy import insert, select, update
from sqlalchemy.exc import InvalidRequestError


class BaseRepo(ABC):
    def __init__(self, tx):
        self.conn = tx.conn
        self.schema = tx.schema

    def find_all(self):
        stmt = select(self._get_table())
        return self.conn.execute(stmt)

    def find_by_id(self, row_id: int):
        table = self._get_table()
        stmt = select(table).where(table.c.id == row_id)

        res = self.conn.execute(stmt)
        if res:
            return res.fetchone()

    def insert(self, data):
        table = self._get_table()
        stmt = insert(table).values(data)
        res = self.conn.execute(stmt)
        return res.inserted_primary_key[0]

    def update(self, data):
        prev_row = self.find_by_id(data['id'])
        if not prev_row:
            raise InvalidRequestError('Invalid id')

        stmt = update(self._get_table()).values(data)
        self.conn.execute(stmt)

    @abstractmethod
    def _get_table(self):
        pass
