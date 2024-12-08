// src/components/HomePage.jsx
import { useNavigate } from 'react-router-dom';
import './Home.css';
import orphan1 from '../../assets/images/goods.jpg';
import orphan2 from '../../assets/images/orphan2.jpg';
import orphan3 from '../../assets/images/clothes.jpeg';
import orphan4 from '../../assets/images/medical.jpeg';
import NavBar from './NavBar';
import ImageSlider from './ImageSlider';  // Importing ImageSlider component

const orphans = [
  { id: 1, name: 'Essentials Drive', image: orphan1 },
  { id: 2, name: 'Food Donation', image: orphan2 },
  { id: 3, name: 'Clothing Contribution', image: orphan3 },
  { id: 4, name: 'Emergency Kits', image: orphan4 },
];

const HomePage = () => {
  const navigate = useNavigate();

  const navigateToDonationForm = (orphanId) => {
    navigate(`/donate/${orphanId}`);
  };

  return (
    <div className="home-container">
      <NavBar />
      
      {/* Image Slider for featured donations */}
      <ImageSlider />

      {/* Scrolling text */}
      <div className="scrolling-text">
        <div className="text">
          Your support helps those in need! | Every contribution makes a difference! | Join us in making a difference!
        </div>
      </div>

      {/* Orphan Cards Grid */}
      <div className="orphans-grid">
        {orphans.map((orphan) => (
          <div key={orphan.id} className="orphan-card">
            <img src={orphan.image} alt={orphan.name} />
            <div className="orphan-info">
              <h2>{orphan.name}</h2>
              <button onClick={() => navigateToDonationForm(orphan.id)}>Donate Now</button>
            </div>
          </div>
        ))}
      </div>

      {/* Sign-up Section */}
      <div className="sign-up-section">
        <p>Don't have an account as a recipient? <a href="/signup">Sign up now</a></p>
        <p>Want to be a Donor? <a href="/donorsignup">Sign up now</a></p>
      </div>
    </div>
  );
};

export default HomePage;
