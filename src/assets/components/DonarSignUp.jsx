import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, InputAdornment, Button, IconButton } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Axios from "axios"; // Import Axios
import NavBar from "./NavBar";

const DonorSignUp = () => {
  const [dname, setDname] = useState("");
  const [dno, setDno] = useState("");
  const [dmail, setDmail] = useState("");
  const [dreason, setDreason] = useState("");
  const [ditem, setDitem] = useState("");
  const [dpwd, setDpwd] = useState("");
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (dno.length !== 10 || isNaN(dno)) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    if (!validateEmail(dmail)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Prepare the data to send to the backend
    const donorData = {
      name: dname,
      mobileNumber: dno,
      email: dmail,
      password: dpwd,
      reason: dreason,
      item: ditem,
    };

    try {
      // Send data to the backend (Replace the URL with your backend URL)
      const response = await Axios.post("http://localhost:8080/donor", donorData);

      if (response.status === 200) {
        alert("Donor details have been sent to the Admin.");
        navigate("/donor-signin");
      }
    } catch (error) {
      alert("Error: " + error.response?.data?.message || "Something went wrong");
    }
  };

  const handleBackClick = () => {
    navigate("/donor-login");
  };

  return (
    <div>
      <NavBar />
      <div>
        <IconButton
          aria-label="back"
          onClick={handleBackClick}
          style={{ position: "absolute", marginTop: "18px", left: "10px", width: "10px" }}
        >
          <ArrowBackIcon fontSize="small" />
        </IconButton>

        <center>
          <div style={{ marginTop: "30px" }}>
            <div style={{ textAlign: "left" }} className="card">
              <h3>Donor Registration</h3>
              <br />
              <form onSubmit={handleSubmit}>
                <div>
                  <TextField
                    label="Name"
                    value={dname}
                    onChange={(e) => setDname(e.target.value)}
                    placeholder="Enter Your Name"
                    required
                    style={{ width: "310px" }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <PersonIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </div>
                <br />
                <div>
                  <TextField
                    label="Mobile Number"
                    type="number"
                    value={dno}
                    onChange={(e) => setDno(e.target.value)}
                    placeholder="Enter your Phone Number"
                    required
                    style={{ width: "310px" }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <PhoneIcon />
                        </InputAdornment>
                      ),
                      inputProps: { maxLength: 20 },
                    }}
                  />
                </div>
                <br />
                <div>
                  <TextField
                    label="Email"
                    value={dmail}
                    onChange={(e) => setDmail(e.target.value)}
                    placeholder="Enter Email"
                    required
                    style={{ width: "310px" }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <EmailIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </div>
                <br />
                <div>
                  <TextField
                    label="Password"
                    type="password"
                    value={dpwd}
                    onChange={(e) => setDpwd(e.target.value)}
                    placeholder="Enter Password"
                    required
                    style={{ width: "310px" }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <LockIcon />
                        </InputAdornment>
                      ),
                      inputProps: { maxLength: 8 },
                    }}
                  />
                </div>
                <br />
                <Button variant="contained" type="submit">
                  Submit
                </Button>
              </form>
            </div>

            <footer className="login-footer" id="footer">
              <p>
                Already have an account? <a href="/donor-login">Login here</a>
              </p>
              <p>
                Need help? <a href="mailto:admin@careconnect.in">Contact Admin!</a>
              </p>
            </footer>
          </div>
        </center>
      </div>
    </div>
  );
};

export default DonorSignUp;
