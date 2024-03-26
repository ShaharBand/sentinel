from fastapi import APIRouter

router = APIRouter(prefix="/users",
                   tags=["users"],
                   responses={404: {"description": "Not found"}})


@router.get("/")
async def read_users():
    # TODO: Add logic to retrieve and return all users
    pass


@router.get("/{username}")
async def read_user(username: str):
    # TODO: Add logic to retrieve and return a user based on the provided username
    pass
