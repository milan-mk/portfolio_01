from fastapi import APIRouter, HTTPException
from datetime import datetime, timezone
from app.models import ContactForm
from app.database import contact_collection

router = APIRouter()

@router.post("/contact")
async def submit_contact(data: ContactForm):
    try:
        message_doc = {
            "name": data.name,
            "email": data.email,
            "message": data.message,
            "created_at": datetime.now(timezone.utc),
        }
        result = await contact_collection.insert_one(message_doc)
        return {"status": "success", "id": str(result.inserted_id)}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/contact")
async def get_all_messages():
    messages = []
    async for msg in contact_collection.find():
        msg["_id"] = str(msg["_id"])
        messages.append(msg)
    return messages
