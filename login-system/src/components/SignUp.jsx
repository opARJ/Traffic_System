import React, { useState } from "react";
import styles from './SignUp.module.css';
import { useNavigate, Link } from "react-router-dom";

import user_icon from './assets/user.png'
import email_icon from './assets/mail.png'
import password_icon from './assets/padlock.png'

const SignUp = () => {
  const [pName, setUsername] = useState("");
  const [pPassword, setPassword] = useState("");
  const [pEmail, setEmail] = useState("");
  const [pIdNumber, setId] = useState("");
  const [pPhone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async () => {
    setError(""); // Reset error message
    setSuccess(""); // Reset success message
    if (!pName || !pPassword || !pEmail || !pIdNumber || !pPhone) {
      setError("Please fill in all fields!");
      return;
    }
    const payload = {
      pName,
      pPassword,
      pEmail,
      pIdNumber,
      pPhone,
    };
    console.log("Payload being sent:", payload);

    try {
      const response = await fetch(
        "http://ec2-43-205-135-163.ap-south-1.compute.amazonaws.com:8080/police/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      console.log("Response status:", response.status); // Log the status code
      console.log("Response ok:", response.ok); // Log whether response.ok is true
      console.log("Raw response:", response); // Log raw response object

      if (response.ok) {
        // const data = await response.json();
        const text = await response.text();
        // Navigate to Payment page, passing the pName in the state
        console.log("Raw text response:", text)
        if (text === "signup successful"){
        setSuccess("Account created successfully! Redirecting to login...");
        setTimeout(() => navigate("/"), 2000); // Redirect to login page after 2 seconds
        }else {
          // Handle unexpected text responses
          setError(text || "An unknown error occurred");
        }
      } else {
        //const errorData = await response.json();
        const errorData = await response.json();
        console.log("Error data:", errorData);
        setError(errorData.message || "Signup failed. Please try again.");
      }
    } catch (err) {
      console.error("Caught error:", err);
      setError("An error occurred. Please try again later.");
    }
  };

  return (
    <div className={styles.sign_background}>
    <div className={styles.sign_container}>
      <h1>Sign Up</h1>
      <div className={styles.inputs}>
        <div className={styles.input}>
          <img src={user_icon} alt="" />
          <input
            type="text"
            placeholder="Username"
            value={pName}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className={styles.input}>
          <img src={user_icon} alt="" />
          <input
            type="text"
            placeholder="ID"
            value={pIdNumber}
            onChange={(e) => setId(e.target.value)}
          />
        </div>

        <div className={styles.input}>
          <img src={user_icon} alt="" />
          <input
            type="number"
            placeholder="Phone"
            value={pPhone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        
        <div className={styles.input}>
          <img src={email_icon} alt="" />
          <input
            type="email"
            placeholder="Email"
            value={pEmail}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={styles.input}>
          <img src={password_icon} alt="" />
          <input
            type="password"
            placeholder="Password"
            value={pPassword}
            onChange={(e) => setPassword(e.target.value)} 
          />
        </div>
      </div>
      <br />
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}
      <button onClick={handleSignUp} align='center'>SignUp</button>
      <p>
        Already have an account? <Link to="/">Login</Link>
      </p>
    </div>
    </div>
  );
};

export default SignUp;
