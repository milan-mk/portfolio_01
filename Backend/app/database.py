import os
import certifi
from dotenv import load_dotenv
from motor.motor_asyncio import AsyncIOMotorClient

load_dotenv()

MONGO_URI = os.getenv("MONGO_URI")

client = AsyncIOMotorClient(MONGO_URI, tlsCAFile=certifi.where())
database = client.portfolio
contact_collection = database.get_collection("contact_messages")
