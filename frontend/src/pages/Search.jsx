import React, { useState } from "react";
import { filterTasks } from "../api/taskApi";

const Search = () => {
  const [searchText, setSearchText] = useState("");
  const [status, setStatus] = useState("");
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await filterTasks({
        search: searchText,
        status: status
      });

      setResults(response.data);
    } catch (err) {
      console.error(err);
      setResults([]);
      setError("No tasks found.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.searchContainer}>
      <h2 style={styles.heading}>Search & Filter Tasks</h2>

      <div style={styles.searchBar}>
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search title or description..."
          style={styles.input}
        />

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          style={styles.select}
        >
          <option value="">All Status</option>
          <option value="PENDING">PENDING</option>
          <option value="INPROGRESS">INPROGRESS</option>
          <option value="COMPLETED">COMPLETED</option>
        </select>

        <button onClick={handleSearch} style={styles.button}>
          Search
        </button>
      </div>

      {loading && <p style={styles.info}>Loading...</p>}
      {error && <p style={styles.error}>{error}</p>}

      <ul style={styles.resultsList}>
        {results.length > 0 ? (
          results.map((task) => (
            <li key={task.id} style={styles.resultItem}>
              <strong>{task.title}</strong>
              <p>{task.description || "No description"}</p>
              <small>Status: {task.status}</small>
            </li>
          ))
        ) : (
          !loading && <p style={styles.noResults}>No results yet.</p>
        )}
      </ul>
    </div>
  );
};

const styles = {
  searchContainer: {
    maxWidth: "700px",
    margin: "40px auto",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 0 8px rgba(0,0,0,0.1)"
  },
  heading: {
    textAlign: "center",
    marginBottom: "20px"
  },
  searchBar: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px"
  },
  input: {
    flex: 1,
    padding: "8px",
    fontSize: "16px"
  },
  select: {
    padding: "8px",
    fontSize: "16px"
  },
  button: {
    padding: "8px 16px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    cursor: "pointer"
  },
  error: {
    color: "red",
    textAlign: "center"
  },
  info: {
    textAlign: "center",
    color: "#555"
  },
  resultsList: {
    listStyle: "none",
    padding: 0
  },
  resultItem: {
    padding: "10px",
    borderBottom: "1px solid #ddd"
  },
  noResults: {
    textAlign: "center",
    color: "#777"
  }
};

export default Search;
