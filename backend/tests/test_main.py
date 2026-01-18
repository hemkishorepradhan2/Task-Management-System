from fastapi.testclient import TestClient
from main import app
client=TestClient(app)

def test_app_starts():
    response=client.get("/tasks")
    assert response.status_code==200
def test_create_task():
    payload={
        "title":"Learn fast api testing.",
        "description":"important",
        "status":"PENDING",
        "due_date":"2026-01-20"
    }
    response=client.post("/tasks",json=payload)
    assert response.status_code==200


def test_get_task_by_id():
    payload={
        "title":"Learn fast api testing.",
        "description":"important",
        "status":"PENDING",
        "due_date":"2026-01-20"
    }
    create_response=client.post(
        "/tasks",
        json=payload
    )
    task_id=create_response.json()["id"]
    response=client.get(f"/tasks/{task_id}")
    assert response.status_code==200
    assert response.json()["id"]==task_id

def test_update_task():
    payload={
        "title":"Learn fast api testing.",
        "description":"important",
        "status":"PENDING",
        "due_date":"2026-01-20"
    }
    create_response=client.post(
        "/tasks",
        json=payload
    )
    task_id=create_response.json()["id"]
    update_payload={
        "title":"Java.",
        "description":"important",
        "status":"PENDING",
        "due_date":"2026-01-20"
    }
    response=client.put(f"/tasks/{task_id}",json=update_payload)
    assert response.status_code==200
    assert response.json()["title"]=="Java."


def test_delete_task():
    payload={
        "title":"Learn fast api testing.",
        "description":"important",
        "status":"PENDING",
        "due_date":"2026-01-20"
    }
    create_response=client.post(
        "/tasks",
        json=payload
    )
    task_id=create_response.json()["id"]
    response=client.delete(f"/tasks/{task_id}")
    assert response.status_code==200
    assert response.json()["is_deleted"]==1