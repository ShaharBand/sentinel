#!/bin/bash

if [ -z "$DB_USER" ] || [ -z "$DB_PASSWORD" ] || [ -z "$DB_SERVER" ] || [ -z "$DB_PORT" ] || [ -z "$DB_NAME" ]; then
    echo "Error: Please make sure all required environment variables are set."
    exit 1
fi

mongosh --host $DB_SERVER --port $DB_PORT --authenticationDatabase admin <<EOF
use $DB_NAME
db.dropUser("$DB_USER")
db.createUser({
    user: "$DB_USER",
    pwd: "$DB_PASSWORD",
    roles: [
        { role: "readWrite", db: "$DB_NAME" }
    ]
})
EOF