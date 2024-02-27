from src.dal.entities.user import User
from src.dal.repositories.user import UserRepository


class UserModel:
    def __init__(self):
        self.user_repo = UserRepository()

    def create_user(self, username: str, password: str) -> User:
        user_data = {
            'username': username,
            'password': password,
            # TODO: the rest here...
        }
        return self.user_repo.create_user(User(**user_data))

    def get_user_by_username(self, username: str) -> User:
        return self.user_repo.get_user_by_username(username)

    def update_user_password(self, username: str, new_password: str) -> bool:
        user = self.get_user_by_username(username)
        if user:
            return self.user_repo.update_user_password(user, new_password)
        return False

    def delete_user(self, username: str) -> bool:
        user = self.get_user_by_username(username)
        if user:
            self.user_repo.delete_user(user)
            return True
        return False
