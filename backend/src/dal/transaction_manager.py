class TransactionManager:
    def __init__(self, schema):
        self.schema = schema
        self.conn = self.schema.engine.connect()

    def __enter__(self):
        return self

    def __exit__(self, type, value, traceback):
        self.conn.commit()
        self.conn.close()
