from fastapi import FastAPI
from database.connection import engine, Base
from router.task_router import router as task_router

Base.metadata.create_all(bind=engine)
app = FastAPI(title="Task Management API")
app.include_router(task_router)

