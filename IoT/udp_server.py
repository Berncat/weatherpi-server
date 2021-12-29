import socket
from dotenv import dotenv_values

#load configuration values from .env file
config = dotenv_values(".env")

serverSocket = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
port = int(config["udpport"])
serverSocket.bind(('', port))
print("Server listening on port " + str(port))

message, address = serverSocket.recvfrom(1024)
text = message.decode()
jsonObj = text.replace("'", '"')
print(jsonObj)
f = open("readings.json", "w")
f.write(jsonObj)
f.close()
