from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from database.connection import engine, Base
from router.task_router import router as task_router

Base.metadata.create_all(bind=engine)

app = FastAPI(title="Task Management System")


origins = [
    "http://localhost:3000",   
    "http://localhost:5173",  
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.include_router(task_router)
