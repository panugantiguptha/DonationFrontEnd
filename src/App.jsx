// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./assets/components/Login";
import DonorSignIn from "./assets/components/DonorSignIn";
import RecipientSignIn from "./assets/components/ReciepientSignIn"; 
import AdminSignIn from "./assets/components/AdminSignIn";
import Home from "./assets/components/Home"; 
import AboutUs from "./assets/components/AboutUs"; 
import Navbar from "./assets/components/NavBar"; 
import DonationForm from './assets/components/DonationForm.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminDashboard from "./assets/components/AdminDashboard.jsx";
import RecipientDashboard from "./assets/components/ReciepientDashboard.jsx";
import SignUp from "./assets/components/SignUp.jsx";
import DonorDashBoard from "./assets/components/DonorDashBoard.jsx";
import AddDonar from "./assets/components/AddDonar.jsx";
import ViewDonations from "./assets/components/ViewDonations.jsx";
import ViewReciepients from "./assets/components/ViewReciepients.jsx";
import AcceptedDonations from "./assets/components/AcceptedDonations.jsx";
import RejectedDonations from "./assets/components/RejectedDonations.jsx";
import RequestDonation from "./assets/components/RequestDonation.jsx";
import RequestHistory from "./assets/components/RequestHistory.jsx";
import ContactAdmin from "./assets/components/ContactAdmin.jsx";
import ContactAdmin2 from "./assets/components/ContactAdmin2.jsx";
import DonarSignUp from "./assets/components/DonarSignUp.jsx";
import ViewDonors from "./assets/components/ViewDonors.jsx";

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />  
        <Route path="/about" element={<AboutUs />} /> 
        <Route path="/donor-signin" element={<DonorSignIn />} />
        <Route path="/donorsignup" element={<DonarSignUp/>}/>
        <Route path="/recipient-signin" element={<RecipientSignIn />} />
        <Route path="/admin-signin" element={<AdminSignIn />} />
        <Route path="/login" element={<Login />} />
        {/* Add a route for the DonationForm, passing an example orphanId */}
        <Route path="/donate/:orphanId" element={<DonationForm />} />
        <Route path="/donor-dashboard" element={<DonorDashBoard/>}/>
        <Route path="/admin-dashboard" element={<AdminDashboard/>}/>
        <Route path="/recipient-dashboard" element={<RecipientDashboard/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/history" element={<RequestHistory/>}/>
        <Route path="/add-donar" element={<AddDonar/>}/>
        <Route path="/viewdonations" element={<ViewDonations/>}/>
        <Route path="/requests" element={<RequestHistory/>}/>
        <Route path="/viewrecipient" element={<ViewReciepients/>}/>
        <Route path="/viewdonors" element={<ViewDonors/>}/>
        <Route path="/accepted" element={<AcceptedDonations/>}/>
        <Route path="/rejected" element={<RejectedDonations/>}/> 
        <Route path="/requestdonation" element={<RequestDonation/>}/>
        <Route path="/contactadmin" element={<ContactAdmin/>}/>
        <Route path="/contactadmin2" element={<ContactAdmin2/>}/>
      </Routes>
    </Router>
  );
}

export default App;
