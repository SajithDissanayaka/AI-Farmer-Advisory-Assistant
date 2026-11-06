from fastapi import FastAPI

from fastapi.middleware.cors import CORSMiddleware
from app.routers.crop import router as crops_router

app = FastAPI(title="AI farmer Advisory Assistant", description="AI Farmer Advosory Assistant backend")

app.add_middleware(CORSMiddleware,
            allow_origins=["http://localhost:4200"],
            allow_credentials=True,
            allow_methods=["GET"],
            allow_headers=["*"],
)

app.include_router(crops_router)

@app.get("/api/health")
def health_check():
    return {
        "status": "Ok",
        "message": "Govi Upadeshka API working"
    }