import { useState } from "react";
import { createTask } from "../api/taskApi";
import '../index.css';
const TaskForm = ({ refreshTasks }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await createTask({
        title,
        description,
        due_date: dueDate,
        status: "PENDING",
      });

      setTitle("");
      setDescription("");
      setDueDate("");
      setMessage("Task created successfully!");
      refreshTasks();
    } catch (error) {
      setMessage("Error creating task. Try again.");
    } finally {
      setLoading(false);
      setTimeout(() => setMessage(""), 3000); 
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: "400px", margin: "20px auto" }}>
      <h3 style={headerStyle}>Create Task</h3>

      {message && <p style={{ color: "green" }}>{message}</p>}

      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="title">Title <span style={{color:"red"}}>*</span></label>
        <input
          id="title"
          type="text"
          placeholder="Enter task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          style={{ width: "100%", padding: "8px", marginTop: "4px" }}
        />
      </div>

      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          placeholder="Enter task description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{ width: "100%", padding: "8px", marginTop: "4px" }}
        />
      </div>

      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="dueDate">Due Date</label>
        <input
          id="dueDate"
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          style={{ width: "100%", padding: "8px", marginTop: "4px" }}
        />
      </div>

      <button className="submitButton"
        type="submit"
        disabled={loading}>
        {loading ? "Adding..." : "Add Task"}
      </button>
    </form>
  );
};
const headerStyle = {
  
  
}

export default TaskForm;
