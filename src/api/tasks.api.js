import axios from "./axios";

export const getAllTasks = () => axios.get("/tasks");

export const createTask = (task) => axios.post("/tasks", task);

export const deleteTask = (id) => axios.delete(`/tasks/${id}`);

export const getTask= (id) => axios.get(`/tasks/${id}`);

export const updateTask = (id, task) => axios.put(`/tasks/${id}`, task);