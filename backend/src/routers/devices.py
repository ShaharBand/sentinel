from fastapi import FastAPI

app = FastAPI()


@app.get("/")
async def read_root():
    return "hello world !"


if __name__ == "__main__":
    import uvicorn

    uvicorn.run("devices:app", reload=True, host="127.0.0.1", port=80)
