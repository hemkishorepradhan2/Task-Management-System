import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <h1 style={styles.logo}>Task Management System</h1>
      <ul style={styles.navLinks}>
        <li>
          <Link to="/" style={styles.link}>Home</Link>
        </li>
        <li>
          <Link to="/tasks" style={styles.link}>All Tasks</Link>
        </li>
        <li>
          <Link to="/search" style={styles.link}>Search</Link>
        </li>
        <li>
          <Link to="/deleted" style={styles.link}>Deleted Tasks</Link>
        </li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "#fff",
    boxShadow: "0 2px 5px rgba(0,0,0,0.2)"
  },
  logo: {
    fontSize: "24px",
    fontWeight: "bold"
  },
  navLinks: {
    listStyle: "none",
    display: "flex",
    gap: "15px",
    margin: 0,
    padding: 0
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "16px"
  }
};

export default Navbar;
