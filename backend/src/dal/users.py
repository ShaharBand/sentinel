from src.dal.db import Database
from src.models.user import User


def create_user(user_data: User) -> User:
    with Database() as session:
        new_user = User(**user_data.dict())
        session.add(new_user)
        session.commit()
        return new_user


def get_user_by_username(username: str) -> User:
    with Database() as session:
        return session.query(User).filter_by(username=username).first()


def update_user_password(user: User, new_password: str):
    with Database() as session:
        user.password = new_password
        session.commit()


def delete_user(user: User):
    with Database() as session:
        session.delete(user)
        session.commit()

