from src.dal.db import Database
from src.dal.entities.user import User


class UserRepository:
    def __init__(self):
        self.db = Database()

    def create_user(self, user_data: User) -> User:
        with self.db as session:
            new_user = User(**user_data.dict())
            session.add(new_user)
            session.commit()
            return new_user

    def get_user_by_username(self, username: str) -> User:
        with self.db as session:
            return session.query(User).filter_by(username=username).first()

    def update_user_password(self, user: User, new_password: str) -> bool:
        with self.db as session:
            user.password = new_password
            session.commit()
            return True

    def delete_user(self, user: User) -> bool:
        with self.db as session:
            session.delete(user)
            session.commit()
            return True
