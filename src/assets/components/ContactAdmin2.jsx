import React, { useState } from 'react';
import { Typography } from '@mui/material';
import { AppBar, Toolbar, Button, Container, Grid, TextField } from '@mui/material';
//import { useNavigate } from 'react-router-dom';  // Import useNavigate
import HandshakeIcon from '@mui/icons-material/Handshake'; // Import a hand/handshake icon
import HomeIcon from '@mui/icons-material/Home';
//import FolderIcon from '@mui/icons-material/Folder';  // For Projects
import MailIcon from '@mui/icons-material/Mail';  // For Contact Us
import InfoIcon from '@mui/icons-material/Info';
import Logout from '@mui/icons-material/Logout';

const ContactAdmin2 = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [success, setSuccess] = useState(false);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send the form data to your server or API
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Message:', message);
        // Reset the form
        setName('');
        setEmail('');
        setMessage('');
        setSuccess(true);
    };

    return (
        <div>
            <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
          <h3 className="navbar-title">
        <HandshakeIcon className="support-icon" /> {/* Hand icon */}
        CareConnect
      </h3>
          </Typography>
          <ul className="navbar-links" >
          <li><a href='/donor-dashboard'><HomeIcon />Home </a></li> 
          <li><a href='/history'><InfoIcon />Request History </a></li> 
          <li> <a href="#footer"><MailIcon /> Contact Admin </a></li> 
          <li><a href='/login'><Logout/>LogOut </a></li>
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
                <Button variant="contained" color="primary" type="submit">
                    Send Message
                </Button>
            </form>
        </Container>
        </div>
        </center>
        </div>
    );
};

export default ContactAdmin2;
