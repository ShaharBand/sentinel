import pytest
from httpx import AsyncClient

from src.api.app import app


@pytest.mark.anyio
async def test_read_users():
    pass
    async with AsyncClient(app=app, base_url="http://localhost:5000", follow_redirects=True) as ac:
        yield ac
    # response = await client_test.get("/api/user/")
    # assert response.status_code == 200
