from sqlalchemy import Column, Integer, String, DateTime,Boolean
from database.connection import Base

class Task(Base):
    __tablename__="tasks"
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, nullable=False)
    description = Column(String, nullable=True)
    status = Column(String, nullable=False, default="PENDING")
    due_date = Column(DateTime, nullable=True)
    is_deleted = Column(Boolean, nullable=False, default=False)