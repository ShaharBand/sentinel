from sqlalchemy import text

from src.dal.db import Database, Base


def reset_database():
    """
    WARNING: This function will drop all existing tables in the database and recreate them.
    All existing data will be lost!
    """
    with Database() as session:
        session.execute(text("TRUNCATE TABLE devices"))
        session.commit()

    try:
        with Database() as session:
            Base.metadata.drop_all(session.bind)
            Base.metadata.create_all(session.bind)

            print("Database tables reset successfully.")
    except Exception as e:
        print(f"Error occurred: {e}")


if __name__ == "__main__":
    reset_database()
