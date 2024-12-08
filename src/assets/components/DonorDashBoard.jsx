// import React from 'react';
// import { AppBar, Toolbar, Typography, Button, Container, Grid, Card, CardContent, CardMedia, TextField } from '@mui/material';
// import { useNavigate } from 'react-router-dom';  // Import useNavigate
// import orphanage from '../../assets/images/orphanage.png'
// import scholar from '../../assets/images/scholar.png'
// import hospital from '../../assets/images/hospital.png'

// import HandshakeIcon from '@mui/icons-material/Handshake'; // Import a hand/handshake icon
// import SupportIcon from '@mui/icons-material/Support';

// const DonorDashBoard = () => {
//   const navigate = useNavigate();  // Initialize useNavigate

//   return (
//     <div>
   
//       <Container style={{ marginTop: '20px' }}>

//         <Typography variant="h4" style={{ marginBottom: '20px' }} >Current Projects</Typography>
//         <Grid container spacing={4}>
//           <Grid item xs={12} md={4}>
//             <Card>
//               <CardMedia
//                 component="img"
//                 alt="Project 1"
//                 height="140"
//                 image={orphanage}
//               />
//               <CardContent>
//                 <Typography variant="h5">Project 1</Typography>
//                 <Typography>Help us build a new orphanage.</Typography>
//                 <Button variant="contained" color="primary">Learn More</Button>
//               </CardContent>
//             </Card>
//           </Grid>
//           <Grid item xs={12} md={4}>
//             <Card>
//               <CardMedia
//                 component="img"
//                 alt="Project 2"
//                 height="140"
//                 image={scholar}
//               />
//               <CardContent>
//                 <Typography variant="h5">Project 2</Typography>
//                 <Typography>Support our scholarship program.</Typography>
//                 <Button variant="contained" color="primary">Learn More</Button>
//               </CardContent>
//             </Card>
//           </Grid>
//           <Grid item xs={12} md={4}>
//             <Card>
//               <CardMedia
//                 component="img"
//                 alt="Project 3"
//                 height="140"
//                 image={hospital}
//               />
//               <CardContent>
//                 <Typography variant="h5">Project 3</Typography>
//                 <Typography>Help us provide healthcare services.</Typography>
//                 <Button variant="contained" color="primary">Learn More</Button>
//               </CardContent>
//             </Card>
//           </Grid>
//         </Grid>

       
//       </Container>
      
   
      
//     </div>
 
//   );
// }

// export default DonorDashBoard;
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HandshakeIcon } from 'lucide-react';
import { Grid, Box } from '@mui/material';  // Import MUI components for layout
import Axios from "axios";  // Axios for API requests
import helpImage from "../images/help.png";  // Replace with your help image URL

const DonorDashboard = () => {
    const [donations, setDonations] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        // Fetch donations from the backend
        const fetchDonations = async () => {
            try {
                const response = await Axios.get("http://localhost:8080/api/donations", {
                    withCredentials: true, // Ensure the session cookie is sent with the request
                });
                setDonations(response.data); // Set donations in the state
            } catch (error) {
                console.error("Error fetching donations:", error);
                setError("An error occurred while fetching donations. Please try again.");
            }
        };

        fetchDonations(); // Fetch donations when component is mounted
    }, []);

    const handleLogout = () => {
        // Redirect to logout logic (you can clear session/cookies if needed)
        window.location.href = '/login'; // Redirecting user to login page after logout
    };

    return (
        <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#fff', color: '#333' }}>
            {/* Navbar */}
            <nav style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '10px 20px',
                backgroundColor: '#fff',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
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
                    <span style={{ fontWeight: 'bold' }}>HumbleHands</span>
                </div>

                <div style={{ display: 'flex', gap: '20px' }}>
                    {/* Navbar Links */}
                    <Link to="/profile" style={{ textDecoration: 'none', fontSize: '16px', color: '#333', fontWeight: 'bold' }}>Profile</Link>
                    <Link to="/donations-history" style={{ textDecoration: 'none', fontSize: '16px', color: '#333', fontWeight: 'bold' }}>Donation History</Link>
                    <Link to="/support" style={{ textDecoration: 'none', fontSize: '16px', color: '#333', fontWeight: 'bold' }}>Support</Link>

                    {/* Logout Button */}
                    <button
                        onClick={handleLogout}
                        style={{
                            padding: '10px 20px',
                            fontSize: '16px',
                            fontWeight: 'bold',
                            color: '#333',
                            backgroundColor: '#fff',
                            border: '1px solid #ccc',
                            borderRadius: '8px',
                            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                            cursor: 'pointer',
                            transition: 'background-color 0.3s, color 0.3s, box-shadow 0.3s'
                        }}
                    >
                        Logout
                    </button>
                </div>
            </nav>

            {/* Dashboard Content */}
            <div style={{ padding: '20px' }}>
                <Grid container spacing={4}>
                    {/* Content Section */}
                    <Grid item xs={12} md={8}>
                        <h3 style={{ color: 'red' }}>Donor Donations</h3>

                        {error && <p style={{ color: "red" }}>{error}</p>} {/* Display error if any */}

                        {/* Donations List */}
                        <div style={{ maxHeight: "500px", overflowY: "auto", marginTop: "20px", paddingRight: "10px" }}>
                            {donations.length > 0 ? (
                                donations.map((donation) => (
                                    <div
                                        key={donation.id}
                                        style={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            padding: "15px",
                                            borderBottom: "1px solid #ddd",
                                            marginBottom: "10px",
                                        }}
                                    >
                                        <div style={{ color: "#c00", fontWeight: "bold" }}>{donation.donorName}</div>
                                        <div style={{ color: "#d40000", fontWeight: "bold" }}>${donation.amount}</div>
                                        <div style={{ fontSize: "12px", color: "#666" }}>{donation.date}</div>
                                    </div>
                                ))
                            ) : (
                                <p>No donations available.</p>
                            )}
                        </div>
                    </Grid>

                    {/* Image Section */}
                    <Grid item xs={12} md={4}>
                        <Box
                            component="img"
                            src={helpImage}  // Replace with your image URL
                            sx={{
                                width: '500px',
                                height: '500px',
                                borderRadius: '8px',
                            }}
                        />
                    </Grid>
                </Grid>
            </div>

            {/* Footer */}
            <footer style={{ textAlign: "center", padding: "20px", backgroundColor: "#f8f8f8", marginTop: "20px", fontSize: "14px", color: "#666" }}>
                <p>Thank you for your support. Together, we can make a difference!</p>
            </footer>
        </div>
    );
};

export default DonorDashboard;
