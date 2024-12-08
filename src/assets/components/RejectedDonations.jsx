import { AppBar, Toolbar, Typography } from '@mui/material';
import HandshakeIcon from '@mui/icons-material/Handshake';
import HomeIcon from '@mui/icons-material/Home';
import FolderIcon from '@mui/icons-material/Folder';  // For Projects
import MailIcon from '@mui/icons-material/Mail';  // For Contact Us
import InfoIcon from '@mui/icons-material/Info';
import Logout from '@mui/icons-material/Logout';

export default function RejectedDonations(){
    return(
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
          <li><a href='/admin-dashboard'><HomeIcon />Home </a></li> 
          <li><a href='/login'><Logout/>LogOut </a></li>
          </ul>
        </Toolbar>
      </AppBar>
        <h3 style={{textAlign:'center',marginTop:'30px'}}> Donations List </h3>
           <table style={{
          width: '82%',
          margin: '0 auto',
          borderCollapse: 'collapse',
          textAlign: 'center',
          boxShadow: '0 0 15px rgba(0, 0, 0, 0.1)',
        }}>
            <thead>
            <tr style={{ padding: '10px', border: '1px solid #ddd', backgroundColor: '#f2f2f2' }}>
            <th >Donor Name </th>&nbsp;&nbsp;&nbsp;&nbsp;
            <th>Donor Email</th>&nbsp;&nbsp;&nbsp;&nbsp;
            <th>Donating For </th>&nbsp;&nbsp;&nbsp;&nbsp;
            <th>Reciepient Name</th>&nbsp;&nbsp;&nbsp;&nbsp;
            <th>Donation Amount</th>
            <th>Status</th>
            </tr>
            </thead>
            <tr style={{ padding: '10px', border: '1px solid #ddd',backgroundColor:'#f9f9f9' }}>
               <td>Punith</td>&nbsp;&nbsp;&nbsp;&nbsp;
               <td>punith4@gmail.com</td>&nbsp;&nbsp;
               <td>Clothes</td>&nbsp;&nbsp;&nbsp;&nbsp;
               <td>Nivesh</td>&nbsp;&nbsp;&nbsp;&nbsp;
               <td>1500</td>
               <td style={{backgroundColor:'red'}}>Rejected </td>
            </tr>
           </table>
       </div>
    )
}