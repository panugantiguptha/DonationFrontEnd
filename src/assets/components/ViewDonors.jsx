import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import HandshakeIcon from "@mui/icons-material/Handshake";

const ViewDonors = () => {
  const [donors, setDonors] = useState([]);
  const [error, setError] = useState(null);

  // Fetch donor data using Axios
  useEffect(() => {
    const fetchDonors = async () => {
      try {
        const response = await axios.get("http://localhost:8080/alldonors"); // Replace with your API endpoint
        setDonors(response.data);
      } catch (err) {
        setError(err.message || "Error fetching donor data");
        console.error("Axios error:", err);
      }
    };

    fetchDonors();
  }, []);

  return (
    <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#fff", color: "#333" }}>
      {/* Navbar */}
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px 20px",
          backgroundColor: "#f8f9fa",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div
          style={{
            fontSize: "34px",
            color: "red",
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
          }}
        >
          <HandshakeIcon
            style={{
              marginRight: "10px",
              fontSize: "35px",
              color: "red",
            }}
          />
          <span style={{ fontWeight: "bold" }}>HumbleHands</span>
        </div>

        <div className="auth-buttons" style={{ display: "flex", gap: "10px" }}>
          <Link to="/admin-dashboard" style={{ textDecoration: "none" }}>
            <button
              style={{
                padding: "10px 20px",
                fontSize: "16px",
                fontWeight: "bold",
                color: "#333",
                backgroundColor: "#fff",
                border: "1px solid #ccc",
                borderRadius: "8px",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                transition: "background-color 0.3s, color 0.3s, box-shadow 0.3s",
              }}
            >
              Home
            </button>
          </Link>
          <Link to="/login" style={{ textDecoration: "none" }}>
            <button
              style={{
                padding: "10px 20px",
                fontSize: "16px",
                fontWeight: "bold",
                color: "#333",
                backgroundColor: "#fff",
                border: "1px solid #ccc",
                borderRadius: "8px",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                transition: "background-color 0.3s, color 0.3s, box-shadow 0.3s",
              }}
            >
              Logout
            </button>
          </Link>
        </div>
      </nav>

      {/* Display Error if Any */}
      {error && (
        <div style={{ textAlign: "center", color: "red", marginTop: "20px" }}>
          Error: {error}
        </div>
      )}
      {/* Table to Display Donors */}
      <div>
        <h3 style={{ textAlign: "center", marginTop: "20px" }}>Donor List</h3>
        <table
          style={{
            width: "60%",
            margin: "0 auto",
            borderCollapse: "collapse",
            textAlign: "center",
            boxShadow: "0 0 15px rgba(0, 0, 0, 0.1)",
          }}
        >
          <thead>
            <tr style={{ backgroundColor: "#f2f2f2", padding: "10px" }}>
              <th>Name</th>
              <th>Mobile Number</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {donors.map((donor, index) => (
              <tr
                key={index}
                style={{
                  padding: "10px",
                  border: "1px solid #ddd",
                  backgroundColor: index % 2 === 0 ? "#f9f9f9" : "#fff",
                }}
              >
                <td>{donor.name}</td>
                <td>{donor.mobileNumber}</td>
                <td>{donor.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewDonors;