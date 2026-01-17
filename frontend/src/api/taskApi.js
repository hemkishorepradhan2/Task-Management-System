import axios from "axios"

const API_URL="http://localhost:8080/tasks";

export const getTasks=()=>{
axios.get(API_URL);
}

export const createTask=(task)=>{
    axios.post(API_URL,task);
}


export const updateTask=(id,updatedData)=>{
    axios.put(`${API_URL}/${id}`,updatedData);
}


export const deleteData=(id)=>{
    axios.delete(`${API_URL}/${id}`);
}
