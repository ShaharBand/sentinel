from fastapi import APIRouter

router = APIRouter()


@router.get("/users/", tags=["users"])
async def read_users():
    # TODO: Add logic to retrieve and return all users
    pass


@router.get("/users/{username}", tags=["users"])
async def read_user(username: str):
    # TODO: Add logic to retrieve and return a user based on the provided username
    pass
