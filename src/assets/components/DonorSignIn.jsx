// src/components/DonorSignIn.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios"; // Import Axios for making HTTP requests
import './DonorSignIn.css'; // Assuming you're using a separate CSS file for styling
import NavBar from "./NavBar";

const DonorSignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // For displaying error messages
  const navigate = useNavigate();

  const validatePassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    return regex.test(password);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate password before making a request
    if (!validatePassword(password)) {
      alert(
        "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, and one digit."
      );
      return;
    }

    try {
      // Send the email and password to the backend for login validation
      const response = await Axios.post("http://localhost:8080/dlogin", {
        email: email,
        password: password,
      });

      // Check the response to see if the login is successful
      if (response.data && response.data.password === password) {
        // If login is successful, navigate to the donor dashboard
        navigate("/donor-dashboard");
      } else {
        // If login fails, set an error message
        setError("Invalid email or password");
      }
    } catch (error) {
      // Handle any errors during the Axios request
      console.error("Login error:", error);
      setError("An error occurred while signing in. Please try again.");
    }
  };

  return (
    <div>
      <NavBar />
      <div className="donor-signin-container">
        <div className="card">
          <h2>Donor Sign In</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
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
            <button className="sign" type="submit">Sign In</button>
            {error && <p className="error-message">{error}</p>} {/* Display error if any */}
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

export default DonorSignIn;
