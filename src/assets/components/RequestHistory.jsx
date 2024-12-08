import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RequestHistory = () => {
  const [donationRequests, setDonationRequests] = useState([]);

  useEffect(() => {
    // Fetch data from the backend API
    axios.get('http://localhost:8080/allrequests')
      .then(response => {
        setDonationRequests(response.data);
      })
      .catch(error => {
        console.error('Error fetching donation requests:', error);
      });
  }, []);

  return (
    <div>
      <h1>Donation Requests</h1>
      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>Name</th>
            <th>Contact</th>
            <th>Email</th>
            <th>Donation Type</th>
            <th>Amount</th>
            <th>Photo</th>
          </tr>
        </thead>
        <tbody>
          {donationRequests.map((request, index) => (
            <tr key={index}>
              <td>{request.name}</td>
              <td>{request.contact}</td>
              <td>{request.email}</td>
              <td>{request.donationType}</td>
              <td>{request.amount}</td>
              <td>
                <img
                  src={request.photoUrl}
                  alt={`Photo of ${request.name}`}
                  style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RequestHistory;
