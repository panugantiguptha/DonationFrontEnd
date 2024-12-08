import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import HandshakeIcon from '@mui/icons-material/Handshake';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const RequestDonation = () => {
    const [formData, setFormData] = useState({
        name: '',
        contact: '',
        email: '',
        donationType: '',
        photo: null,
    });
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();  // Hook for navigation

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Handle file input
    const handleFileChange = (e) => {
        setFormData({
            ...formData,
            photo: e.target.files[0],
        });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Form validation: Check if all fields are filled and photo is uploaded
        if (!formData.name  &&!formData.contact  &&!formData.email  &&!formData.donationType  &&!formData.photo) {
            console.log("All fields are required, including the photo.");
            return;
        }

        // Prepare data for the server
        const data = new FormData();
        data.append('name', formData.name);
        data.append('contact', formData.contact);
        data.append('email', formData.email);
        data.append('donationType', formData.donationType);
        data.append('photo', formData.photo);

        try {
            // Send data to the server
            const response = await fetch('http://localhost:8080/requst-donation', {
                method: 'POST',
                body: data,  // Sending formData directly
            });

            if (response.ok) {
                setOpen(true); // Show success Snackbar
                setFormData({
                    name: '',
                    contact: '',
                    email: '',
                    donationType: '',
                    photo: null,
                }); // Reset form

                // Redirect after success
                setTimeout(() => {
                    navigate('/recipient-dashboard'); // Redirect to recipient-dashboard page
                }, 2000); // Wait 2 seconds before redirect
            } else {
                console.error('Failed to submit the form');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    // Handle Snackbar close
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };


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

{/* Donation Request Form */}
            <form action="/api/donations" method="post" enctype="multipart/form-data" 
             
                style={{
                    margin: '20px auto',
                    padding: '20px',
                    maxWidth: '500px',
                    border: '1px solid #ddd',
                    borderRadius: '8px',
                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)'
                }}
            >
                <h2 style={{ textAlign: 'center', color: 'red' }}>Donation Request Form</h2>
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="name" style={{ display: 'block', marginBottom: '5px' }}>Name</label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        value={formData.name}
                        onChange={handleChange}
                        required 
                        style={{
                            width: '100%',
                            padding: '10px',
                            border: '1px solid #ccc',
                            borderRadius: '5px'
                        }}
                    />
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="contact" style={{ display: 'block', marginBottom: '5px' }}>Contact</label>
                    <input 
                        type="text" 
                        id="contact" 
                        name="contact" 
                        value={formData.contact}
                        onChange={handleChange}
                        required 
                        style={{
                            width: '100%',
                            padding: '10px',
                            border: '1px solid #ccc',
                            borderRadius: '5px'
                        }}
                    />
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>Email</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={formData.email}
                        onChange={handleChange}
                        required 
                        style={{
                            width: '100%',
                            padding: '10px',
                            border: '1px solid #ccc',
                            borderRadius: '5px'
                        }}
                    />
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="donationType" style={{ display: 'block', marginBottom: '5px' }}>Type of Donation</label>
                    <select 
                        id="donationType" 
                        name="donationType" 
                        value={formData.donationType}
                        onChange={handleChange}
                        required 
                        style={{
                            width: '100%',
                            padding: '10px',
                            border: '1px solid #ccc',
                            borderRadius: '5px'
                        }}
                    >
                        <option value="">Select Donation Type</option>
                        <option value="food">Food</option>
                        <option value="clothing">Clothing</option>
                        <option value="medical">Medical Supplies</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="photo" style={{ display: 'block', marginBottom: '5px' }}>Upload Area Photo</label>
                    <input 
                        type="file"

id="photo" 
                        name="photo" 
                        onChange={handleFileChange}
                        required 
                        style={{
                            width: '100%',
                            padding: '10px',
                            border: '1px solid #ccc',
                            borderRadius: '5px'
                        }}
                    />
                </div>
                <button 
                    type="submit" 
                    style={{
                        width: '100%',
                        padding: '10px 20px',
                        fontSize: '18px',
                        fontWeight: 'bold',
                        color: '#fff',
                        backgroundColor: 'red',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        transition: 'background-color 0.3s'
                    }}
                    onMouseOver={(e) => e.target.style.backgroundColor = '#cc0000'}
                    onMouseOut={(e) => e.target.style.backgroundColor = 'red'}
                    onClick={handleSubmit} 
                >
                    Submit
                </button>
            </form>

            {/* Snackbar */}
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <MuiAlert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Request Sent Successfully!
                </MuiAlert>
            </Snackbar>
        </div>
    );
};

export default RequestDonation;