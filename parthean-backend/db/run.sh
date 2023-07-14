docker rm -f test
docker run -d -p 27017:27017 -e MONGO_INITDB_DATABASE=test --name test parthean/mongodb