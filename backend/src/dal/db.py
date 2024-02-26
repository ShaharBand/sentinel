from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

from src.utils.config import db_uri

class Database:
    def __init__(self):
        self.engine = None

    def __enter__(self):
        self.engine = create_engine(db_uri)
        Session = sessionmaker(bind=self.engine)
        self.session = Session()
        return self.session

    def __exit__(self, exc_type, exc_value, traceback):
        if self.session:
            if exc_type:
                self.session.rollback()
            self.session.close()
