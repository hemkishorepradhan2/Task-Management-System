from sqlalchemy import or_
from sqlalchemy.orm import Session
from models.task import Task
from schemas.task import CreateTask, UpdateTask
from typing import List, Optional


def create_task(db: Session, task_in: CreateTask) -> Task:
    db_task = Task(
        title=task_in.title,
        description=task_in.description,
        status=task_in.status,
        due_date=task_in.due_date
    )
    db.add(db_task)
    db.commit()
    db.refresh(db_task)
    return db_task


def read_tasks(db: Session) -> List[Task]:
    return db.query(Task).filter(Task.is_deleted == False).all()

def read_task(db: Session, task_id: int) -> Optional[Task]:
    return db.query(Task).filter(Task.id == task_id, Task.is_deleted == False).first()


def update_task(db: Session, task_id: int, task_in: UpdateTask) -> Optional[Task]:
    task = db.query(Task).filter(Task.id == task_id, Task.is_deleted == False).first()
    if not task:
        return None

    task.title = task_in.title if task_in.title is not None else task.title
    task.description = task_in.description if task_in.description is not None else task.description
    task.status = task_in.status if task_in.status is not None else task.status
    task.due_date = task_in.due_date if task_in.due_date is not None else task.due_date

    db.commit()
    db.refresh(task)
    return task


def soft_delete_task(db: Session, task_id: int) -> Optional[Task]:
    task = db.query(Task).filter(Task.id == task_id, Task.is_deleted == False).first()
    if not task:
        return None

    task.is_deleted = True
    db.commit()
    db.refresh(task)
    return task


def getdeletedtasks(db:Session)->List[Task]:
    return db.query(Task).filter(Task.is_deleted == True).all()


def filter_tasks(
    db: Session,
    search: str | None = None,
    status: str | None = None
):
    query = db.query(Task).filter(Task.is_deleted == False)

    if search:
        query = query.filter(
            or_(
                Task.title.ilike(f"%{search}%"),
                Task.description.ilike(f"%{search}%")
            )
        )

    if status:
        query = query.filter(Task.status == status)

    return query.all()











