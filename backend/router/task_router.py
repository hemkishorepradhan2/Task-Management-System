from fastapi import APIRouter, HTTPException, Depends
from sqlalchemy.orm import Session
from database.session import get_db
from schemas.task import CreateTask, UpdateTask, TaskResponse
from crud.crud import create_task, read_tasks, read_task, update_task, soft_delete_task,getdeletedtasks,searchtaskbytitle
from typing import List

router = APIRouter(
    prefix="/tasks",
    tags=["Tasks"]
)

@router.get("", response_model=List[TaskResponse])
def get_all_tasks(db: Session = Depends(get_db)):
    return read_tasks(db)

@router.get("/search",response_model=List[TaskResponse])
def search_title(searchtaskname:str,db:Session=Depends(get_db))->List[TaskResponse]:
    
    result=searchtaskbytitle(db,search_task_title=searchtaskname.strip())
    if not result:
        raise HTTPException(status_code=404,detail="Task not found or the resource must have been deleted.")
    return result

@router.get("/showdeletedtasks",response_model=List[TaskResponse])
def get_deleted_task(db:Session=Depends(get_db)):
    return getdeletedtasks(db)

@router.post("", response_model=TaskResponse)
def create_new_task(task_in: CreateTask, db: Session = Depends(get_db)):
    return create_task(db, task_in)





@router.get("/{task_id}", response_model=TaskResponse)
def get_task_by_id(task_id: int, db: Session = Depends(get_db)):
    task = read_task(db, task_id)
    if not task:
        raise HTTPException(status_code=404, detail="Task not found")
    return task

@router.put("/{task_id}", response_model=TaskResponse)
def update_task_by_id(task_id: int, task_in: UpdateTask, db: Session = Depends(get_db)):
    updated_task = update_task(db, task_id, task_in)
    if not updated_task:
        raise HTTPException(status_code=404, detail="Task not found")
    return updated_task

@router.delete("/{task_id}", response_model=TaskResponse)
def delete_task_by_id(task_id: int, db: Session = Depends(get_db)):
    deleted_task = soft_delete_task(db, task_id)
    if not deleted_task:
        raise HTTPException(status_code=404, detail="Task not found")
    return deleted_task
