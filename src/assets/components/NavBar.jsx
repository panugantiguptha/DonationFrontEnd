// src/assets/components/NavBar.jsx

import { Link } from 'react-router-dom';
import './Navbar.css'; // Import CSS for NavBar styling
import SupportIcon from '@mui/icons-material/Support';
import HandshakeIcon from '@mui/icons-material/Handshake'; // Import a hand/handshake icon
import HomeIcon from '@mui/icons-material/Home';
import LoginIcon from '@mui/icons-material/Login';
import InfoIcon from '@mui/icons-material/Info';

const NavBar = () => {
    return (
        <nav className="navbar">
            <h1 className="logo">
                <HandshakeIcon className="support-icon" /> {/* Hand icon */}
                HumbleHands
            </h1>
            <ul className="nav-links">
                <li><Link to="/" className="nav-link">Home</Link></li>&nbsp;&nbsp;&nbsp;
                <li><Link to="/about" className="nav-link">About</Link></li>
            </ul>
            <div className="auth-buttons">
                <Link to="/login">
                    <button className="login-button2">Login</button>
                </Link>
            </div>
        </nav>
    );
};

export default NavBar;