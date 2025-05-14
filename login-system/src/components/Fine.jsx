import React from "react";
import './Fine.css';
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import IndianMap from './assets/IndianMap.png'


const Fine = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const username = location.state?.username || "User";
    const handelhome = () => {
        navigate("/main", { state: { username } });
      };
      const data= [
        {
            Number: 'WB08B9840',
            Date: '13-11-2024',
            Time: '11:45:03',
            Challan: '5000',
            Payment: 'Paid',
            Doc: 'Insurance',
        },
        {
            Number: 'WB21K1234',
            Date: '15-11-2024',
            Time: '16:11:48',
            Challan: '8000',
            Payment: 'Paid',
            Doc: 'Insurance',
        },
        {
            Number: 'WB25M9999',
            Date: '18-11-2024',
            Time: '21:20:00',
            Challan: '6500',
            Payment: 'Unpaid',
            Doc: 'Pollution',
        },
      ]

    return (
        <div className="main">
            <div className="dashboard-header">
                <div className="header-left">
                <h2>Automated Challan Management System</h2>
                <h1>Challan</h1>
              </div>
                <div className="header-right">
                <img src={IndianMap} alt="India Map" className="india-map" />
                <p>Kolkata, India</p>
              </div>
            </div>
            <div className="Pay_container">
      <table>
        <thead>
            <tr>
              <th>Number</th>
              <th>Date</th>
              <th>Time</th>
              <th>Amount</th>
              <th>Payment Status</th>
              <th>Failed Doc</th>
            </tr>
        </thead>
        <tbody>
          {
            data.map((i)=>(
                <tr key ={i.Number} >
                    <td>{i.Number}</td>
                    <td>{i.Date}</td>
                    <td>{i.Time}</td>
                    <td>{i.Challan}</td>
                    <td>{i.Payment}</td>
                    <td>{i.Doc}</td>
                </tr>
            )
            )
          }
        </tbody>
      </table>
  </div>
        </div>
    );
};

export default Fine;