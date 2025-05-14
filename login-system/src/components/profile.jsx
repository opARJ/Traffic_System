//import { FaFacebookF, FaPinterestP, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./PoliceProfileCard.css";
import { logout } from "../store/authSlice";
import { useDispatch } from "react-redux";
import ProfilePic from "./assets/image.png"

const PoliceProfileCard = () => {


  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <div className="profile-wrapper">
    <div className="profile-container">
      {/* Left Card */}
      <div className="profile-card">
        <img
          src={ProfilePic}
          alt="Police Officer"
          className="profile-image"
        />
        <h2 className="profile-name">USER</h2>
        <p className="profile-role">Traffic Police</p>
        <p className="profile-description">Ensuring road safety and enforcing vehicle documentation laws.</p>
        
        <div className="profile-stats">
          <div>
            <p className="stat-number">150</p>
            <p className="stat-label">Cars Checked</p>
          </div>
          <div>
            <p className="stat-number">85</p>
            <p className="stat-label">Fines Issued</p>
          </div>
          <div>
            <p className="stat-number">9.5</p>
            <p className="stat-label">Efficiency Rating</p>
          </div>
        </div>
      </div>
      
      {/* Right Card */}
      <div className="fines-card">
        <h3 className="fines-title">Fines Summary</h3>
        <p className="fines-description">Overview of fines collected for vehicle violations.</p>
        
        <div className="fines-stats">
          <div className="fines-box violations">
            <span className="fines-number">120</span>
            <span className="fines-label">This week violations</span>
          </div>
          <div className="fines-box collected">
            <span className="fines-number">₹7500</span>
            <span className="fines-label">Fines Collected</span>
          </div>
        </div>
        
        {/* <div className="social-icons">
          <FaFacebookF />
          <FaPinterestP />
          <FaLinkedinIn />
          <FaTwitter />
          <FaInstagram />
        </div> */}
      </div>
    </div>
      <button className="logout-button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default PoliceProfileCard;
