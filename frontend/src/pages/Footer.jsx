import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>
        &copy; {new Date().getFullYear()} Task Management System. All rights reserved.
      </p>
      <p style={styles.text}>
        Developed by Hem Kishore Pradhan
      </p>
    </footer>
  );
};

const styles = {
  footer: {
    marginTop: "50px",
    padding: "20px",
    backgroundColor: "#007bff",
    color: "#fff",
    textAlign: "center",
    fontSize: "14px",
    boxShadow: "0 -2px 5px rgba(0,0,0,0.1)"
  },
  text: {
    margin: "5px 0"
  }
};

export default Footer;
