import React, { useState } from 'react';
import { Typography, Container, TextField, Button, AppBar, Toolbar } from '@mui/material';
import HandshakeIcon from '@mui/icons-material/Handshake'; // CareConnect symbol
import HomeIcon from '@mui/icons-material/Home';
import MailIcon from '@mui/icons-material/Mail';
import InfoIcon from '@mui/icons-material/Info';
import Logout from '@mui/icons-material/Logout';

const ContactAdmin = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Send data to backend API to save in database
        try {
            const response = await fetch('your-backend-api-url/contact-admin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, message }),
            });
            const data = await response.json();
            if (data.success) {
                setSuccess(true);
                setName('');
                setEmail('');
                setMessage('');
            }
        } catch (error) {
            console.error('Error saving contact form data:', error);
        }
    };

    return (
        <div>
            <AppBar position="static" style={{ backgroundColor: '#f44336' }}>
                <Toolbar>
                    <Typography variant="h6" style={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
                        <HandshakeIcon /> {/* CareConnect icon */}
                        <span style={{ marginLeft: '10px' }}>CareConnect</span>
                    </Typography>
                    <ul className="navbar-links" style={{ display: 'flex', listStyle: 'none', margin: 0 }}>
                        <li><a href='/recipient-dashboard' style={{ color: '#fff' }}><HomeIcon />Home</a></li>
                        <li><a href='/history' style={{ color: '#fff' }}><InfoIcon />Request History</a></li>
                        <li><a href="#footer" style={{ color: '#fff' }}><MailIcon />Contact Admin</a></li>
                        <li><a href='/login' style={{ color: '#fff' }}><Logout />LogOut</a></li>
                    </ul>
                </Toolbar>
            </AppBar>

            <center>
                <div className='card'>
                    <Container style={{ marginTop: '20px' }}>
                        <Typography variant="h4" gutterBottom>
                            Contact Admin
                        </Typography>
                        {success && <Typography variant="body1" color="success.main">Your message has been sent successfully!</Typography>}
                        <form onSubmit={handleSubmit}>
                            <TextField
                                label="Name"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                            <TextField
                                label="Email"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <TextField
                                label="Message"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                multiline
                                rows={4}
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                            />
                            <Button variant="contained" style={{ backgroundColor: '#d32f2f' }} type="submit">
                                Send Message
                            </Button>
                        </form>
                    </Container>
                </div>
            </center>
        </div>
    );
};

export default ContactAdmin;
