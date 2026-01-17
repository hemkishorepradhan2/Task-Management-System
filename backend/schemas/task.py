from pydantic import BaseModel
from typing import Optional
from datetime import datetime


class TaskBase(BaseModel):
    title:str
    description: Optional[str] = None
    status: Optional[str] = "PENDING"
    due_date: Optional[datetime]=None

class CreateTask(TaskBase):
    pass

class UpdateTask(BaseModel):
    title: Optional[str] = None
    description: Optional[str] = None
    status: Optional[str] = None
    due_date: Optional[datetime] = None


class TaskResponse(BaseModel):
    id: int
    title: str
    description: Optional[str] = None
    status: str
    due_date: Optional[datetime] = None
    is_deleted: bool

    class Config:
        orm_mode = True

    