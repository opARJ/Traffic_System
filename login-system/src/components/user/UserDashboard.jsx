import React from "react";
import "./UserDashboard.css";
import IndianMap from '../assets/IndianMap.png'

const UserDashboard = () => {
  return (
    <div className="user-dashboard">
        <div className="dashboard-header">
                <div className="header-left">
                <h2>Automated Challan Management System</h2>
                <h1>User Dashboard</h1>
              </div>
              <div className="header-right">
                <img src={IndianMap} alt="India Map" className="india-map" />
                <p>Kolkata, India</p>
              </div>
            </div>
            <div className="mid"><h2>Welcome, User!!</h2></div>
      <div className="dashboard-cards">
        <div className="card">Total Cars Owned</div>
        <div className="card">Payment History</div>
        <div className="card">Car Status</div>
      </div>
    </div>
  );
};

export default UserDashboard;
