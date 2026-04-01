from fastapi import FastAPI
from routes import chatbot, jobs, schemes, farming, healthcare

app = FastAPI()

app.include_router(chatbot.router)
app.include_router(jobs.router)
app.include_router(schemes.router)
app.include_router(farming.router)
app.include_router(healthcare.router)

@app.get("/")
def home():
    return {"message": "Smart Help Platform API Running"}