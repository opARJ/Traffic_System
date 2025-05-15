import React, { useState } from "react";
import styles from'./Login.module.css';
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../store/authSlice";
import user_icon from './assets/user.png'
import password_icon from './assets/padlock.png'
import bgImage from './assets/traffic.png';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleLogin = async () => {
    setError("");
    if (!email || !password) {
      setError("Please fill in all fields!");
      return;
    }
    try {
      const response = await fetch(
        "https://cors-anywhere.herokuapp.com/http://ec2-43-205-135-163.ap-south-1.compute.amazonaws.com:8080/police/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      console.log("Response status:", response.status); // Log the status code
      console.log("Response ok:", response.ok); // Log whether response.ok is true
      console.log("Raw response:", response); // Log raw response object


      if (response.ok) {
        const data = await response.json();
        dispatch(loginSuccess({ user: data }));
        navigate("/Dashboard");
      } else {
        const errorData = await response.json();
        setError(errorData.message || "Invalid username or password");
      }
    } catch (err) {
      console.error("Caught error:", err);
      setError("An error occurred. Please try again later.");
    }
  };
  

  return (
    <div className={styles.log_background}>
    <div className={styles.log_container}>
      <h1>Login</h1>
      <div className={styles.inputs}>
        <div className={styles.input}>
          <img src={user_icon} alt="" />  
          <input
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={styles.input}>
          <img src={password_icon} alt="" />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
      {error && <p style={{ color: "lightblue" }}>{error}</p>}
      <br/>
      <button onClick={handleLogin}><a>Login</a></button>
      <p>
        Don't have an account? <Link to="/signup">Sign Up!!</Link>
      </p>
    </div>
    </div>
  );
};

export default Login;
