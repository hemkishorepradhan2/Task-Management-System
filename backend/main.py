from fastapi import FastAPI

app=FastAPI()

@app.get("/")
def home_route():
    return {"message":"WELCOME TO TASK MANAGEMENT SYSTEM"}