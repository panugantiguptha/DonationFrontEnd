import { useState, useEffect } from "react";
import axios from "axios";
import { Grid, Box } from '@mui/material';
import HandshakeIcon from '@mui/icons-material/Handshake';
import HomeIcon from '@mui/icons-material/Home';
import Logout from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';

const ViewReciepients = () => {
  const [donationRequests, setDonationRequests] = useState([]);

  useEffect(() => {
    const fetchDonationRequests = async () => {
      try {
        const response = await axios.get("http://localhost:8080/allreciepients");
        setDonationRequests(response.data);
      } catch (error) {
        console.error("Error fetching donation requests:", error);
      }
    };

    fetchDonationRequests();
  }, []);

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#fff', color: '#333' }}>
      {/* Navbar */}
      <nav style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10px 20px'
      }}>
        <div style={{
          fontSize: '34px',
          color: 'red',
          fontWeight: 'bold',
          display: 'flex',
          alignItems: 'center'
        }}>
          <HandshakeIcon style={{
            marginRight: '10px',
            fontSize: '35px',
            color: 'red',
          }} />
          <span style={{ fontWeight: 'bold' }}>HambleHands</span>
        </div>

        <div className="auth-buttons" style={{ display: 'flex', gap: '10px' }}>
          <Link to="/login" style={{ textDecoration: 'none' }}>
            <button
              className="logout-button"
              style={{
                display: 'inline-block',
                padding: '10px 20px',
                fontSize: '20px',
                fontWeight: 'bold',
                color: '#333',
                position: 'relative',
                left: '-20px',
                fontFamily: "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
                backgroundColor: '#fff',
                border: '1px solid #ccc',
                borderRadius: '8px',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                textAlign: 'center',
                textDecoration: 'none',
                transition: 'background-color 0.3s, color 0.3s, box-shadow 0.3s'
              }}
            >
              LogOut
            </button>
          </Link>
        </div>
      </nav>

      {/* Content */}
      <div style={{ padding: '20px' }}>
        <h3 style={{ textAlign: 'center', marginTop: '20px' }}>Recipients List</h3>
        <table style={{
          width: '60%',
          margin: '0 auto',
          borderCollapse: 'collapse',
          textAlign: 'center',
          boxShadow: '0 0 15px rgba(0, 0, 0, 0.1)',
        }}>
          <thead>
            <tr>
              <td>Name</td>
              <td>Email</td>
              <td>Mobile Number</td>
            </tr>
          </thead>
          <tbody>
            {donationRequests.map((request, index) => (
              <tr key={index} style={{
                padding: '10px',
                border: '1px solid #ddd',
                backgroundColor: index % 2 === 0 ? "#f9f9f9" : "#fff"
              }}>
                <td>{request.name}</td>
                <td>{request.email}</td>
                <td>{request.mobileNumber}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewReciepients;