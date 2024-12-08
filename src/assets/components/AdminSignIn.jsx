// src/components/AdminSignIn.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './AdminSignIn.css'; // Assuming you're using a separate CSS file for styling
import AdminDashboard from "./AdminDashboard";
import NavBar from "./NavBar";
import Axios from "axios";

const AdminSignIn = () => {
  const [adminId, setAdminId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); 
  const navigate = useNavigate();

  // const validatePassword = (password) => {
  //   const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  //   return regex.test(password);
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Log adminId and password to the console
    console.log("Admin ID:", adminId);
    console.log("Password:", password);
  
    // Validate password format
    
  
    try {
      // Make POST request to login endpoint
      const response = await Axios.post("http://localhost:8080/alogin", {
        admin_id: adminId,
        password: password,
      });
  
      // Check if the response contains valid user data
      if (response.data && response.data.password === password) {
        console.log("Login successful.");
        navigate("/admin-dashboard"); // Navigate to the dashboard on successful login
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
          <h2>Admin Sign In</h2>
          <form onSubmit={handleSubmit}>
          <div className="input-container">
            <input
              type="text"
              value={adminId}
              onChange={(e) => setAdminId(e.target.value)}
              placeholder="Enter your admin ID"
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
          <button onClick={AdminDashboard}>Sign In</button>
            {error && <p className="error-message">{error}</p>}
          </form>
        </div>
      </div>
     
    </div>
  );
              


  
};

export default AdminSignIn;