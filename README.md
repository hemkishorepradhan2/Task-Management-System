# Task Management System

##### A simple Task Management System built with FastAPI and SQLAlchemy that allows users to create, view, update, and soft delete tasks.
---

## Features

### Backend

- Create a task
- List all tasks
- Update task details and status
- Soft delete a task

### Database (tasks table)

- id (integer, primary key)
- title (string) – The title of the task
- description (string) – Task description
- status (string)-Task status (Pending, In Progress, Done)
- due_date (date) – Task due date
- is_deleted (boolean) – Flag for soft deletion

### Frontend(ReactJs)

- Task creation form
- Task list table
- Status update dropdown

### Tech Stack

- FastAPI
- SQLAlchemy
- Pydantic
- SQLite (default, can be changed)
- Uvicorn
- ReactJS

---

### Installation & Setup

```git clone https://github.com/hemkishorepradhan2/Task-Management-System ```
```cd task-management-system ```
```python -m venv venv source venv/bin/activate # Linux / macOS venv\Scripts\activate ```
#### Windows
 ```pip install -r requirements.txt ```
```uvicorn main:app --reload ```

API will run at:

```http://127.0.0.1:8000```

Swagger Docs:

```http://127.0.0.1:8000/docs```

### API Endpoints

| Method | Endpoint      | Description                    |
| -----: | ------------- | ------------------------------ |
|   POST | `/tasks`      | Create a new task              |
|    GET | `/tasks`      | List all active tasks          |
|    GET | `/tasks/{id}` | Retrieve a specific task by ID |
|    PUT | `/tasks/{id}` | Update task details or status  |
| DELETE | `/tasks/{id}` | Soft delete a task             |

### Example API Requests

#### 1. Create Task

### Endpoint

```
POST /tasks
```

### Request Body

```json
{
  "title": "Task Title",
  "description": "Task description",
  "status": "Pending",
  "due_date": "2026-01-20"
}
```

#### Success Response

```json
{
  "id": 1,
  "title": "Task Title",
  "description": "Task description",
  "status": "Pending",
  "due_date": "2026-01-20",
  "is_deleted": false
}
```

---

#### 2️. List All Tasks

##### Endpoint

```
GET /tasks
```

##### Success Response

```json
[
  {
    "id": 1,
    "title": "Task Title",
    "description": "Task description",
    "status": "Pending",
    "due_date": "2026-01-20",
    "is_deleted": false
  },
  {
    "id": 2,
    "title": "Another Task",
    "description": "Another description",
    "status": "In Progress",
    "due_date": "2026-01-22",
    "is_deleted": false
  }
]
```

---

### 3️. Get Task by ID

#### Endpoint

```
GET /tasks/{id}
```

#### Success Response

```json
{
  "id": 1,
  "title": "Task Title",
  "description": "Task description",
  "status": "Pending",
  "due_date": "2026-01-20",
  "is_deleted": false
}
```

#### Error Response

```json
{
  "detail": "Task not found"
}
```

---

### 4️. Update Task

#### Endpoint

```
PUT /tasks/{id}
```

#### Request Body

```json
{
  "title": "Updated Title",
  "description": "Updated description",
  "status": "In Progress",
  "due_date": "2026-01-25"
}
```

#### Success Response

```json
{
  "id": 1,
  "title": "Updated Title",
  "description": "Updated description",
  "status": "In Progress",
  "due_date": "2026-01-25",
  "is_deleted": false
}
```

### Error Response

```json
{
  "detail": "Task not found"
}
```

---

### 5️. Soft Delete Task

#### Endpoint

```
DELETE /tasks/{id}
```

#### Success Response

```json
{
  "id": 1,
  "title": "Task Title",
  "description": "Task description",
  "status": "Pending",
  "due_date": "2026-01-20",
  "is_deleted": true
}
```

#### Error Response

```json
{
  "detail": "Task not found"
}
```

---

### Notes

* Deleted tasks are **not removed from the database**
* `is_deleted = true` indicates a soft-deleted task
* Only active tasks should be returned in `GET /tasks`

---

### Status Values

```text
Pending | In Progress | Done
```

---

### Error Handling

The API returns standard HTTP status codes.

| Status Code | Description            |
|------------:|------------------------|
| 200         | Success                |
| 201         | Resource created       |
| 400         | Bad request            |
| 404         | Task not found         |
| 422         | Validation error       |
| 500         | Internal server error  |


### Example cURL Requests

### Create a Task
```bash
curl -X POST http://127.0.0.1:8000/tasks \
-H "Content-Type: application/json" \
-d '{
  "title": "Test Task",
  "description": "Testing curl",
  "status": "Pending",
  "due_date": "2026-01-20"
}
```


---

### Folder Structure

```
├── 📁 backend
│ ├── 📁 crud
│ │ ├── 📄 crud.py
│ │ ├── 📁 __pycache__
│ │ │ ├── 📄 crud.cpython-312.pyc
│ ├── 📁 database
│ │ ├── 📄 connection.py
│ │ ├── 📄 session.py
│ │ ├── 📁 __pycache__
│ │ │ ├── 📄 connection.cpython-312.pyc
│ │ │ ├── 📄 session.cpython-312.pyc
│ ├── 📄 main.py
│ ├── 📁 models
│ │ ├── 📄 task.py
│ │ ├── 📁 __pycache__
│ │ │ ├── 📄 task.cpython-312.pyc
│ ├── 📄 requirements.txt
│ ├── 📁 router
│ │ ├── 📄 task_router.py
│ │ ├── 📁 __pycache__
│ │ │ ├── 📄 task_router.cpython-312.pyc
│ ├── 📁 schemas
│ │ ├── 📄 task.py
│ │ ├── 📁 __pycache__
│ │ │ ├── 📄 task.cpython-312.pyc
│ ├── 📄 tasks.db
│ ├── 📁 tests
│ ├── 📁 __pycache__
│ │ ├── 📄 main.cpython-312.pyc
├── 📁 frontend
│ ├── 🟨 eslint.config.js
│ ├── 📄 index.html
│ ├── 🗂️ package-lock.json
│ ├── 🗂️ package.json
│ ├── 📁 public
│ │ ├── 🖼️ vite.svg
│ ├── 📜 README.md
│ ├── 📁 src
│ │ ├── 📁 api
│ │ │ ├── 🟨 taskApi.js
│ │ ├── 🎨 App.css
│ │ ├── 🟦 App.jsx
│ │ ├── 📁 assets
│ │ │ ├── 🖼️ react.svg
│ │ ├── 📁 components
│ │ │ ├── 🟦 TaskForm.jsx
│ │ │ ├── 🟦 TaskList.jsx
│ │ ├── 🎨 index.css
│ │ ├── 🟦 main.jsx
│ │ ├── 📁 pages
│ │ │ ├── 🟦 Tasks.jsx
│ ├── 🟨 vite.config.js
├── 📄 LICENSE
├── 📜 README.md

```

---

###  License

This project is licensed under the MIT License.

---

### Author

Developed by **Hem Kishore Pradhan**



