import os
from dotenv import load_dotenv
from motor.motor_asyncio import AsyncIOMotorClient

load_dotenv()

MONGO_URI = os.getenv("MONGO_URI")

client = AsyncIOMotorClient(MONGO_URI,tls=True, tlsAllowInvalidCertificates=False)
database = client.portfolio
contact_collection = database.get_collection("contact_messages")
