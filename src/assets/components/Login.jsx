import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Login.css'; // Ensure your CSS is correctly linked
import NavBar from "./NavBar";

const Login = () => {
  const [userType, setUserType] = useState("");
  const navigate = useNavigate();

  const handleUserTypeSelection = (type) => {
    setUserType(type);
  };

  const handleLoginRedirect = () => {
    if (userType) {
      navigate(`/${userType}-signin`);
    }
  };

  return (
    <div>
      <NavBar/>
    <div className="login-container">
      
     
      <h2>Select Your Role</h2>
      <div className="button-container">
        <button className="button-donor" onClick={() => handleUserTypeSelection("donor")}>
          Login as Donor
        </button>
        <button className="button-recipient" onClick={() => handleUserTypeSelection("recipient")}>
          Login as Recipient
        </button>
        <button className="button-admin" onClick={() => handleUserTypeSelection("admin")}>
          Login as Admin
        </button>
      </div>
      {userType && (
        <div>
          <br></br>
          <h3>You selected: {userType}</h3>
          <br></br>
          <button className="button-admin" onClick={handleLoginRedirect}>Proceed to Sign In</button>
        </div>
      )}
      <footer className="login-footer">
        <p>Don't have an account as a recipient? <a href="/signup">Sign up now!</a></p>
        <p>Want to be a Donor?  <a href="/donorsignup">Sign up now</a></p>
      </footer>
    </div>
    </div>
  );
};

export default Login;
