import { getDeletedTasks /* restoreTask */ } from "../api/taskApi";
import { useState } from "react";

const statusColors = {
  PENDING: "#FFC107",
  INPROGRESS: "#2196F3",
  DONE: "#4CAF50",
};

const DeletedTaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchDeletedTasks = async () => {
    setLoading(true);
    setError("");

    try {
      const data = await getDeletedTasks();
      setTasks(data);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch deleted tasks");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Deleted Tasks</h2>

      <button
        onClick={fetchDeletedTasks}
        style={buttonStyle}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#333")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#555")}
      >
        Show Deleted Tasks
      </button>

      {loading && <p style={infoText}>Loading...</p>}
      {error && <p style={errorText}>{error}</p>}

      {tasks.length > 0 && (
        <div style={tableWrapper}>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Title</th>
                <th style={thStyle}>Description</th>
                <th style={thStyle}>Due Date</th>
                <th style={thStyle}>Status</th>
                <th style={thStyle}>Deleted</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task, index) => (
                <tr
                  key={task.id}
                  style={{
                    backgroundColor: index % 2 === 0 ? "#fafafa" : "#fff",
                  }}
                >
                  <td style={tdStyle}>{task.title}</td>
                  <td style={tdStyle}>{task.description || "—"}</td>
                  <td style={tdStyle}>
                    {task.due_date
                      ? new Date(task.due_date).toLocaleDateString()
                      : "—"}
                  </td>

                  <td style={tdStyle}>
                    <span
                      style={{
                        ...statusBadge,
                        backgroundColor:
                          statusColors[task.status] || "#999",
                      }}
                    >
                      {task.status}
                    </span>
                  </td>

                  <td style={tdStyle}>
                    <span style={deletedBadge}>YES</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {!loading && tasks.length === 0 && (
        <p style={infoText}>No deleted tasks</p>
      )}
    </div>
  );
};



const containerStyle = {
  maxWidth: "1100px",
  margin: "30px auto",
  padding: "20px",
  backgroundColor: "#fff",
  borderRadius: "8px",
  boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
};

const headingStyle = {
  marginBottom: "15px",
  color: "#333",
};

const buttonStyle = {
  padding: "10px 18px",
  backgroundColor: "#555",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  marginBottom: "15px",
  transition: "background-color 0.2s",
};

const tableWrapper = {
  overflowX: "auto",
};

const tableStyle = {
  width: "100%",
  borderCollapse: "collapse",
};

const thStyle = {
  padding: "12px",
  textAlign: "left",
  backgroundColor: "#f2f2f2",
  borderBottom: "2px solid #ddd",
};

const tdStyle = {
  padding: "12px",
  borderBottom: "1px solid #eee",
};

const statusBadge = {
  padding: "5px 12px",
  color: "#fff",
  borderRadius: "12px",
  fontSize: "13px",
  fontWeight: "bold",
};

const deletedBadge = {
  padding: "5px 10px",
  backgroundColor: "#f44336",
  color: "#fff",
  borderRadius: "12px",
  fontSize: "12px",
  fontWeight: "bold",
};

const errorText = {
  color: "#f44336",
  marginTop: "10px",
};

const infoText = {
  marginTop: "15px",
  color: "#555",
};

export default DeletedTaskList;
