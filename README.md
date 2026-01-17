# Task Management System

A simple Task Management System built with FastAPI and SQLAlchemy that allows users to create, view, update, and delete tasks.

---

## Features

### Backend
- Create a task
- List all tasks
- Retrieve a single task by ID
- Update task status
- Soft delete task

### Database (tasks table)
- `title` (string) – The title of the task
- `description` (string) – Task description
- `status` (string) – Task status (`Pending`, `In Progress`, `Done`)
- `due_date` (date) – Task due date
- `is_deleted` (boolean) – Flag for soft deletion

### Frontend
- Task creation form
- Task list table
- Status update dropdown

---

## API Endpoints

### Create Task
`POST /tasks`
- Request Body:
```json
{
  "title": "Task Title",
  "description": "Task description",
  "status": "Pending",
  "due_date": "2026-01-20"
}

# ==========================
# Task Management System API Endpoints
# ==========================

# 1. Create Task
# POST /tasks
# Request Body Example:
# {
#     "title": "Task Title",
#     "description": "Task description",
#     "status": "Pending",
#     "due_date": "2026-01-20"
# }
# Response Example:
# {
#     "id": 1,
#     "title": "Task Title",
#     "description": "Task description",
#     "status": "Pending",
#     "due_date": "2026-01-20",
#     "is_deleted": false
# }

# 2. List All Tasks
# GET /tasks
# Response Example:
# [
#     {
#         "id": 1,
#         "title": "Task Title",
#         "description": "Task description",
#         "status": "Pending",
#         "due_date": "2026-01-20",
#         "is_deleted": false
#     },
#     ...
# ]

# 3. Get Task by ID
# GET /tasks/{task_id}
# Response Example:
# {
#     "id": 1,
#     "title": "Task Title",
#     "description": "Task description",
#     "status": "Pending",
#     "due_date": "2026-01-20",
#     "is_deleted": false
# }
# Error Response:
# {
#     "detail": "Task not found"
# }

# 4. Update Task
# PUT /tasks/{task_id}
# Request Body Example:
# {
#     "title": "Updated Title",
#     "description": "Updated description",
#     "status": "In Progress",
#     "due_date": "2026-01-25"
# }
# Response Example:
# {
#     "id": 1,
#     "title": "Updated Title",
#     "description": "Updated description",
#     "status": "In Progress",
#     "due_date": "2026-01-25",
#     "is_deleted": false
# }
# Error Response:
# {
#     "detail": "Task not found"
# }

# 5. Soft Delete Task
# DELETE /tasks/{task_id}
# Response Example:
# {
#     "id": 1,
#     "title": "Task Title",
#     "description": "Task description",
#     "status": "Pending",
#     "due_date": "2026-01-20",
#     "is_deleted": true
# }
# Error Response:
# {
#     "detail": "Task not found"
# }
```