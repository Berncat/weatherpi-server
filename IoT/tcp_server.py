import socket
from dotenv import dotenv_values

#load configuration values from .env file
config = dotenv_values(".env")

serverSocket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
port = int(config["tcpport"])
serverSocket.bind(('', port))
print("Server listening on port " + str(port))

# queue up to 5 requests
serverSocket.listen()
connection, addr = serverSocket.accept()
image = connection.recv(1024)
file = open('/home/ubuntu/weatherServer/public/images/image.jpg', "wb")

while image:
    file.write(image)
    image = connection.recv(1024)
    if not image:
        file.close()
