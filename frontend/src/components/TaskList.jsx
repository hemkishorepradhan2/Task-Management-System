import { updateTask, deleteTask } from "../api/taskApi";

const statusColors = {
  PENDING: "#FFC107",
  INPROGRESS: "#2196F3",
  DONE: "#4CAF50",
};

const TaskList = ({ tasks, refreshTasks }) => {
  const handleStatusChange = async (task, status) => {
    await updateTask(task.id, {
      title: task.title,
      description: task.description,
      due_date: task.due_date,
      status: status,
    });
    refreshTasks();
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      await deleteTask(id);
      refreshTasks();
    }
  };

  return (
    <div style={{ overflowX: "auto", marginTop: "20px" }}>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ backgroundColor: "#f2f2f2" }}>
            <th style={thStyle}>Title</th>
            <th style={thStyle}>Description</th>
            <th style={thStyle}>Due Date</th>
            <th style={thStyle}>Status</th>
            <th style={thStyle}>Action</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id} style={{ borderBottom: "1px solid #ddd" }}>
              <td style={tdStyle}>{task.title}</td>
              <td style={tdStyle}>{task.description}</td>
              <td style={tdStyle}>{new Date(task.due_date).toLocaleDateString()}</td>
              <td style={tdStyle}>
                <select
                  value={task.status}
                  onChange={(e) => handleStatusChange(task, e.target.value)}
                  style={{
                    padding: "5px",
                    backgroundColor: statusColors[task.status] || "#fff",
                    color: "#fff",
                    border: "none",
                    borderRadius: "4px",
                  }}
                >
                  <option value="PENDING">Pending</option>
                  <option value="INPROGRESS">In Progress</option>
                  <option value="DONE">Done</option>
                </select>
              </td>
              <td style={tdStyle}>
                <button
                  onClick={() => handleDelete(task.id)}
                  style={{
                    padding: "5px 10px",
                    backgroundColor: "#f44336",
                    color: "#fff",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const thStyle = { textAlign: "left", padding: "10px" };
const tdStyle = { padding: "10px" };

export default TaskList;
