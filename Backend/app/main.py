from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routers import contact
from app.config import FRONTEND_URL

app = FastAPI(title="Milan Kumar Portfolio API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[FRONTEND_URL, "http://localhost:5173"],
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(contact.router, prefix="/api")

@app.get("/")
def root():
    return {"status": "ok", "message": "Portfolio API is running"}
