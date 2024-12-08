// src/components/RecipientSignIn.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import './RecipientSignIn.css';
import NavBar from "./NavBar";

const RecipientSignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // For displaying error messages
  const navigate = useNavigate();

  const validatePassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    return regex.test(password);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate password format
    if (!validatePassword(password)) {
      alert(
        "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, and one digit."
      );
      return;
    }

    try {
      // Make POST request to login endpoint
      const response = await Axios.post("http://localhost:8080/rlogin", {
        name: username,
        password: password,
      });

      // Check if the response contains valid user data
      if (response.data && response.data.password === password) {
        console.log("Login successful.");
        navigate("/recipient-dashboard"); // Navigate to the dashboard on successful login
      } else {
        console.error("Invalid username or password");
        setError("Invalid username or password"); // Display error message for incorrect credentials
      }
    } catch (error) {
      // Handle any server errors or failed requests
      console.error("Login error:", error);
      setError("Invalid username or password");
    }
  };

  return (
    <div>
      <NavBar />
      <div className="recipient-signin-container">
        <div className="card">
          <h2>Recipient Sign In</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
                required
              />
            </div>
            <div className="input-container">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
            </div>
            <button className="button-admin" type="submit">Sign In</button>
            {error && <p className="error-message">{error}</p>}
          </form>
        </div>
      </div>
      <footer className="login-footer" id="footer">
        <p>
          Don't have an account as a recipient? <a href="/signup">Sign up now!</a>
        </p>
        <p>Want to be a Donor?  <a href="/donorsignup">Sign up now</a></p>
      </footer>
    </div>
  );
};

export default RecipientSignIn;
