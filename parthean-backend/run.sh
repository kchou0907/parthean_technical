docker rm -f parthean_backend
docker run -d -p 8080:8080 --name parthean_backend parthean/node_backend
