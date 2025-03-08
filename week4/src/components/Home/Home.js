import React from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";

function Home(props) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to Our App</h1>

      <div className={styles.buttonContainer}>
        <Link to="/login">
          <button className={styles.button}>Login</button>
        </Link>
        <Link to="/signup">
          <button className={styles.button}>Signup</button>
        </Link>
        {props.name && (
          <>
            <Link to="/profile">
              <button className={styles.button}>Profile</button>
            </Link>
            <Link to="/upload">
              <button className={styles.button}>Upload</button>
            </Link>
            <Link to="/data">
              <button className={styles.button}>Data</button>
            </Link>
          </>
        )}
      </div>

      <h2>{props.name ? `Welcome - ${props.name}` : "Please login or sign up"}</h2>
    </div>
  );
}

export default Home;