import { AppBar, Toolbar, Typography } from '@mui/material';
import HandshakeIcon from '@mui/icons-material/Handshake';
import HomeIcon from '@mui/icons-material/Home';
import Logout from '@mui/icons-material/Logout';

export default function AcceptedDonations() {
  return (
    <div>
      {/* Navigation Bar */}
      <AppBar position="static" style={{ backgroundColor: '#1976d2' }}>
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
            <HandshakeIcon style={{ marginRight: '10px' }} />
            HumbleHands
          </Typography>
          <nav>
            <ul className="navbar-links" style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0 }}>
              <li style={{ margin: '0 15px' }}>
                <a href="/admin-dashboard" style={{ textDecoration: 'none', color: 'white', display: 'flex', alignItems: 'center' }}>
                  <HomeIcon style={{ marginRight: '5px' }} />
                  Home
                </a>
              </li>
              <li style={{ margin: '0 15px' }}>
                <a href="/login" style={{ textDecoration: 'none', color: 'white', display: 'flex', alignItems: 'center' }}>
                  <Logout style={{ marginRight: '5px' }} />
                  Log Out
                </a>
              </li>
            </ul>
          </nav>
        </Toolbar>
      </AppBar>

      {/* Donations Table */}
      <div style={{ padding: '20px' }}>
        <Typography variant="h4" style={{ textAlign: 'center', margin: '30px 0', color: '#333' }}>
          Donations List
        </Typography>
        <table style={{
          width: '90%',
          margin: '0 auto',
          borderCollapse: 'collapse',
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
          backgroundColor: '#ffffff',
          borderRadius: '8px',
          overflow: 'hidden',
        }}>
          <thead>
            <tr style={{ backgroundColor: '#f2f2f2', textAlign: 'left' }}>
              <th style={{ padding: '15px', borderBottom: '2px solid #ddd' }}>Donor Name</th>
              <th style={{ padding: '15px', borderBottom: '2px solid #ddd' }}>Donor Email</th>
              <th style={{ padding: '15px', borderBottom: '2px solid #ddd' }}>Donating For</th>
              <th style={{ padding: '15px', borderBottom: '2px solid #ddd' }}>Recipient Name</th>
              <th style={{ padding: '15px', borderBottom: '2px solid #ddd' }}>Donation Amount</th>
              <th style={{ padding: '15px', borderBottom: '2px solid #ddd' }}>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ textAlign: 'left', backgroundColor: '#fafafa' }}>
              <td style={{ padding: '15px', borderBottom: '1px solid #ddd' }}>Punith</td>
              <td style={{ padding: '15px', borderBottom: '1px solid #ddd' }}>punith4@gmail.com</td>
              <td style={{ padding: '15px', borderBottom: '1px solid #ddd' }}>Food</td>
              <td style={{ padding: '15px', borderBottom: '1px solid #ddd' }}>Manikanta</td>
              <td style={{ padding: '15px', borderBottom: '1px solid #ddd' }}>1000</td>
              <td style={{ padding: '15px', borderBottom: '1px solid #ddd', color: 'white', backgroundColor: 'green', textAlign: 'center' }}>
                Accepted
              </td>
            </tr>
            <tr style={{ textAlign: 'left', backgroundColor: '#ffffff' }}>
              <td style={{ padding: '15px', borderBottom: '1px solid #ddd' }}>Sarvani</td>
              <td style={{ padding: '15px', borderBottom: '1px solid #ddd' }}>sarvani17@gmail.com</td>
              <td style={{ padding: '15px', borderBottom: '1px solid #ddd' }}>Cyclone Effected</td>
              <td style={{ padding: '15px', borderBottom: '1px solid #ddd' }}>Sunitha</td>
              <td style={{ padding: '15px', borderBottom: '1px solid #ddd' }}>1200</td>
              <td style={{ padding: '15px', borderBottom: '1px solid #ddd', color: 'white', backgroundColor: 'green', textAlign: 'center' }}>
                Accepted
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
