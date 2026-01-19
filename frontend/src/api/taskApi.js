import axios from "axios";

const API_URL = "http://localhost:8080/tasks";

export const getTasks = () => axios.get(API_URL);

export const createTask = (task) =>
  axios.post(API_URL, task);

export const updateTask = (id, updatedData) =>
  axios.put(`${API_URL}/${id}`, updatedData);

export const deleteTask = (id) =>
  axios.delete(`${API_URL}/${id}`);

export const showtDeletedTasks = async () => {
  const res = await axios.get(`${API_URL}/showdeletedtasks`);
  return res.data;
};
