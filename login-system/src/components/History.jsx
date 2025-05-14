import React, {useState} from "react";
import './History.css';
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import {
  FaSearch
}from "react-icons/fa";
import IndianMap from './assets/IndianMap.png'

const data= [
  {
      Number: 'WB08B9840',
      Model: 'Swift',
      Date: '13-11-2024',
      Doc: 'Insurance',
      T_Status: 'ON',
      P_Status: 'Paid',
  },
  {
      Number: 'WB21K1234',
      Model: 'Nexon',
      Date: '15-11-2024',
      Doc: 'Insurance',
      T_Status: 'Passed',
      P_Status: 'Paid',
  },
  {
      Number: 'WB25M9999',
      Model: 'Hector',
      Date: '18-11-2024',
      Doc: 'Pollution',
      T_Status: 'Passed',
      P_Status: 'Unpaid',
  },
]

const History = () => {

  const [searchQuery, setSearchQuery] = useState("");

  const filteredData = data.filter((item) =>
    Object.values(item).some((value) =>
      value.toString().toLowerCase().includes(searchQuery.toLowerCase())
    )
  );
  return (
    <div className="main">
      <div className="dashboard-header">
        <div className="header-left">
          <h2>Automated Challan Management System</h2>
          <h1>History</h1>
        </div>
        <div className="header-right">
          <img src={IndianMap} alt="India Map" className="india-map" />
          <p>Kolkata, India</p>
        <i class="FaSearch"></i>
        <input
          type="text"
          className="search-bar"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        </div>
      </div>
    <div className="H_container">
      <table>
        <thead>
            <tr>
              <th>Number</th>
              <th>Model</th>
              <th>Date</th>
              <th>Failed doc</th>
              <th>Threshold Status</th>
              <th>Payment Status</th>
            </tr>
        </thead>
        <tbody>
        {filteredData.length > 0 ? (
              filteredData.map((i) => (
                <tr key={i.Number}>
                  <td>{i.Number}</td>
                  <td>{i.Model}</td>
                  <td>{i.Date}</td>
                  <td>{i.Doc}</td>
                  <td>{i.T_Status}</td>
                  <td>{i.P_Status}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" style={{ textAlign: "center", color: "red" }}>
                  No results found
                </td>
              </tr>
            )}
        </tbody>
      </table>
  </div>
  </div>
);
};

export default History;