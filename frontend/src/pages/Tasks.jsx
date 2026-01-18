import { useEffect, useState } from "react";
import { getTasks } from "../api/taskApi";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const response = await getTasks();
    setTasks(response.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div style={containerStyle}>
      <h1 style={headerStyle}>Welcome To Task Management System</h1>

      <div style={formCardStyle}>
        <TaskForm refreshTasks={fetchTasks} />
      </div>

      <div style={listCardStyle}>
        <TaskList tasks={tasks} refreshTasks={fetchTasks} />
      </div>
    </div>
  );
};

const containerStyle = {
  maxWidth: "800px",
  margin: "0 auto",
  padding: "20px",
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
};

const headerStyle = {
  textAlign: "center",
  marginBottom: "20px",
  color: "#fff",
  backgroundColor:"#333",
  border: "4px solid lightblue"
};

const formCardStyle = {
  backgroundColor: "#f9f9f9",
  padding: "20px",
  borderRadius: "8px",
  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  marginBottom: "30px",
};

const listCardStyle = {
  backgroundColor: "#fff",
  padding: "20px",
  borderRadius: "8px",
  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
};

export default Tasks;
