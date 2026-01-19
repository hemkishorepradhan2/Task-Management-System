import React, { useState } from "react";
import { searchByTitle } from "../api/taskApi";

const Search = () => {
  const [searchTitle, setSearchTitle] = useState("");
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    try {
      setError(""); 
      const response = await searchByTitle(searchTitle);
      setResults(response.data);
    } catch (err) {
      console.error(err);
      setError("Something went wrong while fetching data.");
    }
  };

  return (
    <div style={styles.searchContainer}>
      <h2 style={styles.heading}>Search by Title</h2>
      <div style={styles.searchBar}>
        <input
          type="text"
          value={searchTitle}
          onChange={(e) => setSearchTitle(e.target.value)}
          placeholder="Enter title..."
          style={styles.input}
        />
        <button onClick={handleSearch} style={styles.button}>Search</button>
      </div>
      {error && <p style={styles.error}>{error}</p>}
      <ul style={styles.resultsList}>
        {results.length > 0 ? (
          results.map((item, index) => (
            <li key={index} style={styles.resultItem}>
              {item.searchtaskname || JSON.stringify(item)}
            </li>
          ))
        ) : (
          <p style={styles.noResults}>No results yet.</p>
        )}
      </ul>
    </div>
  );
};

const styles = {
  searchContainer: {
    maxWidth: "600px",
    margin: "40px auto",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 0 8px rgba(0,0,0,0.1)",
    fontFamily: "Arial, sans-serif"
  },
  heading: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#333"
  },
  searchBar: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px"
  },
  input: {
    flex: 1,
    padding: "8px 12px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    fontSize: "16px"
  },
  button: {
    padding: "8px 16px",
    border: "none",
    backgroundColor: "#007bff",
    color: "white",
    fontSize: "16px",
    borderRadius: "4px",
    cursor: "pointer"
  },
  error: {
    color: "red",
    marginBottom: "10px",
    textAlign: "center"
  },
  resultsList: {
    listStyle: "none",
    padding: 0
  },
  resultItem: {
    padding: "10px",
    borderBottom: "1px solid #ddd",
    backgroundColor: "#fff",
    borderRadius: "4px",
    marginBottom: "8px"
  },
  noResults: {
    textAlign: "center",
    color: "#666",
    fontStyle: "italic"
  }
};

export default Search;
