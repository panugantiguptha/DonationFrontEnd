import { Link } from 'react-router-dom';
import SupportIcon from '@mui/icons-material/Support';
import HomeIcon from '@mui/icons-material/Home';
import HistoryIcon from '@mui/icons-material/History';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HelpIcon from '@mui/icons-material/Help';
import { HandshakeIcon } from 'lucide-react';
import { Grid, Box } from '@mui/material';  // Import MUI components for layout
import helpImage from "../images/help.png"

const RecipientDashboard = () => {
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
                    <span style={{ fontWeight: 'bold' }}>careconnect</span>
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
                            Logout
                        </button>
                    </Link>
                </div>
            </nav>

            {/* Dashboard Content */}
            <div style={{ padding: '20px' }}>
                <Grid container spacing={4}>
                    {/* Content Section */}
                    <Grid item xs={12} md={8}>
                        <div style={{ marginBottom: '20px' }}>
                            <h3>Your Profile</h3>
                            <p>View and edit your personal information.</p>
                            <Link to="/profile" style={{
                                backgroundColor: '#b91d2d',
                                color: '#fff',
                                padding: '10px 20px',
                                textDecoration: 'none',
                                borderRadius: '5px',
                                fontSize: '16px'
                            }}>Go to Profile</Link>
                        </div>

                        <div style={{ marginBottom: '20px' }}>
                            <h3>Need for help?</h3>
                            <p>Need assistance? Submit your request</p>
                            <Link to="/requestdonation" style={{
                                backgroundColor: '#b91d2d',
                                color: '#fff',
                                padding: '10px 20px',
                                textDecoration: 'none',
                                borderRadius: '5px',
                                fontSize: '16px'
                            }}>Request for Donation</Link>
                        </div>

                        <div style={{ marginBottom: '20px' }}>
                            <h3>Your Requests</h3>
                            <p>Track your donation requests and their approval status.</p>
                            <Link to="/requests" style={{
                                backgroundColor: '#b91d2d',
                                color: '#fff',
                                padding: '10px 20px',
                                textDecoration: 'none',
                                borderRadius: '5px',
                                fontSize: '16px'
                            }}>View Requests</Link>
                        </div>

                        <div style={{ marginBottom: '20px' }}>
                            <h3>Need Help?</h3>
                            <p>If you need assistance, visit our help center.</p>
                            <Link to="/contactadmin" style={{
                                backgroundColor: '#b91d2d',
                                color: '#fff',
                                padding: '10px 20px',
                                textDecoration: 'none',
                                borderRadius: '5px',
                                fontSize: '16px'
                            }}>Go to Help</Link>
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
                                marginLeft : '0',
                                
                            }}
                        />
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default RecipientDashboard;
