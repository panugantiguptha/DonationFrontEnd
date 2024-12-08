import { useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import NavBar from './NavBar'
import { 
  Container, 
  Typography, 
  TextField, 
  Select, 
  MenuItem, 
  Button, 
  FormControl, 
  InputLabel 
} from '@mui/material'; // Import MUI components
import { useNavigate } from 'react-router-dom';


const DonationForm = ({ orphanId }) => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    amount: '',
    paymentMethod: '',
  });
const navigate=useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleDonation=()=>{
    navigate('/viewdonations')
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert('Thank you for helping the orphans!');
    // Reset the form or navigate back to the homepage
    setFormData({
      name: '',
      age: '',
      amount: '',
      paymentMethod: '',
    });
  };

  return (
    
    <div>
      <NavBar/>
    <Container maxWidth="sm" className="donation-form-container">
      <Typography variant="h4" gutterBottom>
        Donate Now: {orphanId}
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Your Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          margin="normal"
        />
        <TextField
          fullWidth
          label="Your Age"
          name="age"
          type="number"
          value={formData.age}
          onChange={handleChange}
          required
          margin="normal"
        />
        <TextField
          fullWidth
          label="Donation Amount"
          name="amount"
          type="number"
          value={formData.amount}
          onChange={handleChange}
          required
          margin="normal"
        />
        <FormControl fullWidth required margin="normal">
          <InputLabel>Select Payment Method</InputLabel>
          <Select
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
          >
            <MenuItem value="" disabled>Select Payment Method</MenuItem>
            <MenuItem value="paytm">Paytm</MenuItem>
            <MenuItem value="googlepay">Google Pay</MenuItem>
          </Select>
        </FormControl>
        <Button 
          variant="contained" 
          color="primary" 
          type="submit" 
          fullWidth 
          style={{ marginTop: '16px' }}
          onClick={handleDonation}
        >
          Submit
        </Button>
      </form>
    </Container>
    </div>
  );
};

// Define prop types
DonationForm.propTypes = {
  orphanId: PropTypes.number.isRequired, // Adjust the type according to your needs
};
<div className="sign-up-section">
<p>Want to be a Donor? Contact <a href="mailto:admin@HambleHands.in">admin@HambleHands.in</a></p>
</div>

export default DonationForm;
