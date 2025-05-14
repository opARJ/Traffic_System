import React from "react";
import { useState } from "react";
import "./Dashboard.css";
import IndianMap from './assets/IndianMap.png'

export default function Dashboard() {

  const [selectedMonth, setSelectedMonth] = useState(null); // null means monthly view

  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", 
                  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const handleMonthClick = (month) => {
    setSelectedMonth(prev => (prev === month ? null : month)); // toggle selection
  };

  return (
    <div className="dashboard-container">

      <div className="dashboard-header">
        <div className="header-left">
          <h2>Automated Challan Management System</h2>
          <h1>Dashboard</h1>
        </div>
        <div className="header-right">
          <img src={IndianMap} alt="India Map" className="india-map" />
          <p>Kolkata, India</p>
        </div>
      </div>

      <div className="card-grid">
        <div className="card">
          <p>Total Challan Collected</p>
          <h2>₹27,200</h2>
        </div>
        <div className="card">
          <p>Total Challan This Month</p>
          <h2>₹12,100</h2>
          <div className="percentage yellow">44%</div>
        </div>
        <div className="card">
          <p>Avg. Monthly Challan</p>
          <h2>₹15,100</h2>
          <div className="percentage red">56%</div>
        </div>
      </div>

      {/* MONTH SELECTOR */}
      <div className="month-selector">
              {months.map((month) => (
                <button
                  key={month}
                  className={`month-button ${selectedMonth === month ? "active" : ""}`}
                  onClick={() => handleMonthClick(month)}
                >
                  {month}
                </button>
              ))}
            </div>

    {/* CHARTS */}
    <div className="chart-section">
        <div className="chart-card">
          <h3>{selectedMonth ? `Challan in ${selectedMonth}` : "Challan by Month"}</h3>
          <div className="bar-chart">
            {(selectedMonth
              ? Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`)
              : months
            ).map((label, i) => (
              <div key={label} className="bar-container">
                <div className="bar" style={{ height: `${Math.random() * 80 + 20}px` }}></div>
                <p>{label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="chart-card">
          <h3>{selectedMonth ? `Violations in ${selectedMonth}` : "Monthly Violations"}</h3>
          <div className="trips-chart">
            {(selectedMonth
              ? Array.from({ length: 30 }, (_, i) => i + 1)
              : months
            ).map((label, idx) => (
              <div key={label} className="trips-container">
                <p className="month">{label}</p>
                <p className="trips">{Math.floor(Math.random() * 5)}</p>
                <p className="percentage-change">{`${Math.floor(Math.random() * 200) - 100}%`}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}


{/* <div className="card-grid">
        <div className="card">
          <h3>Driver</h3>
          <p className="amount">₹11,200</p>
          <div className="line-chart-placeholder"></div>
        </div>
        <div className="card">
          <h3>Buddy</h3>
          <p className="amount">₹3,900</p>
          <div className="line-chart-placeholder"></div>
        </div>
      </div>

      <div className="card-grid">
        <div className="card icon-card">
          <div className="icon location"></div>
          <p>Total Distance</p>
          <h2>868 km</h2>
        </div>
        <div className="card icon-card">
          <div className="icon return"></div>
          <p>Return</p>
          <h2>8 Trips</h2>
        </div>
        <div className="card icon-card">
          <div className="icon one-way"></div>
          <p>One-Way</p>
          <h2>16 Trips</h2>
        </div>
      </div> */}