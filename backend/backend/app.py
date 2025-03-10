# backend/app.py
if __name__ == "__main__" and __package__ is None:
    __package__ = "backend"

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from backend.api.routes import router as api_router

# Create a FastAPI instance with metadata
app = FastAPI(
    title="PyNodeAI Backend API",
    description="API for the PyNodeAI low-code AI model platform.",
    version="0.1.0"
)

# Set up CORS middleware to allow requests from the front-end.
# In production, restrict 'allow_origins' to your specific front-end URL.
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include our API routes with a common prefix (/api)
app.include_router(api_router, prefix="/api")

@app.get("/")
def read_root():
    """
    Root endpoint for health-checking the server.
    
    Returns:
        A JSON message indicating the server is running.
    """
    return {"message": "Welcome to the PyNodeAI Backend API!"}
