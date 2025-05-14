import React, { useEffect, useState } from "react";
import './Fine.css';
import { useLocation, useNavigate } from "react-router-dom";
import IndianMap from './assets/IndianMap.png';

const Fine = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const username = location.state?.username || "User";

    // const data= [
      //   {
      //       Number: 'WB08B9840',
      //       Date: '13-11-2024',
      //       Time: '11:45:03',
      //       Challan: '5000',
      //       Payment: 'Paid',
      //       Doc: 'Insurance',
      //   },
      //   {
      //       Number: 'WB21K1234',
      //       Date: '15-11-2024',
      //       Time: '16:11:48',
      //       Challan: '8000',
      //       Payment: 'Paid',
      //       Doc: 'Insurance',
      //   },
      //   {
      //       Number: 'WB25M9999',
      //       Date: '18-11-2024',
      //       Time: '21:20:00',
      //       Challan: '6500',
      //       Payment: 'Unpaid',
      //       Doc: 'Pollution',
      //   },
      // ]

    const [data, setData] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        fetch("http://ec2-43-205-135-163.ap-south-1.compute.amazonaws.com:8080/police/get-vehicles-with-pending-fines")
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then(result => {
                console.log("API Response:", result);
                setData(result);
            })
            .catch(err => {
                console.error("Error fetching fine data:", err);
                setError("Failed to load fine data");
            });
    }, []);

    const handleHome = () => {
        navigate("/main", { state: { username } });
    };

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
                {error ? (
                    <p className="error-message">{error}</p>
                ) : (
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
                            {data && data.length > 0 ? (
                                data.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.vehicleNumber || 'N/A'}</td>
                                        <td>{item.fineDate || 'N/A'}</td>
                                        <td>{item.fineTime || 'N/A'}</td>
                                        <td>{item.fineAmount || 'N/A'}</td>
                                        <td>{item.fineStatus || 'N/A'}</td>
                                        <td>{item.failedDocument || 'N/A'}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="6">No pending fines found.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
};

export default Fine;
