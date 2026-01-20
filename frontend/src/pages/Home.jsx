import React from "react";

const Home = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome to Task Management System</h1>
      <p style={styles.text}>
        Manage your tasks efficiently! You can:
      </p>
      <ul style={styles.list}>
        <li>View all tasks</li>
        <li>Search tasks by title or description</li>
        <li>Filter tasks by status</li>
        <li>See deleted tasks</li>
      </ul>
      <p style={styles.text}>
        Use the navigation bar above to get started.
      </p>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "700px",
    margin: "50px auto",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 0 8px rgba(0,0,0,0.1)",
    fontFamily: "Arial, sans-serif",
    textAlign: "center"
  },
  heading: {
    fontSize: "32px",
    marginBottom: "20px",
    color: "#007bff"
  },
  text: {
    fontSize: "18px",
    marginBottom: "15px",
    color: "#333"
  },
  list: {
    textAlign: "left",
    listStyleType: "disc",
    paddingLeft: "20px",
    marginBottom: "20px",
    color: "#555"
  }
};

export default Home;
