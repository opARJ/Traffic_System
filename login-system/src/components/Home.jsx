import React, {useState, useEffect} from "react";
import './Home.css';
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import IndianMap from './assets/IndianMap.png'

const data= [
    {
        Number: 'WB08B9840',
        Date: '13-11-2024',
        Time: '11:45:03',
        Threshold: '2 days',
        Payment: 'Paid',
    },
    {
        Number: 'WB21K1234',
        Date: '15-11-2024',
        Time: '16:11:48',
        Threshold: '5 days',
        Payment: 'Due',
    },
    {
        Number: 'WB25M9999',
        Date: '18-11-2024',
        Time: '21:20:00',
        Threshold: '10 days',
        Payment: 'Paid',
    },
]

const Home = () => {

  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  
       useEffect(() => {
           fetch("http://ec2-43-205-135-163.ap-south-1.compute.amazonaws.com:8080/police/get-vehicles-with-pending-fines")
               .then(response => response.json())
               .then(result => setData(result))
               .catch(err => {
                   console.error("Error fetching data:", err);
                   setError("Failed to load data");
               });
       }, []);

    return (
        <div className="main">
        <div className="dashboard-header">
                        <div className="header-left">
                        <h2>Automated Challan Management System</h2>
                        <h1>Vehicles pased threshold</h1>
                      </div>
                      <div className="header-right">
                        <img src={IndianMap} alt="India Map" className="india-map" />
                        <p>Kolkata, India</p>
                      </div>
                    </div>
        <div className="H_container">
          <table>
            <thead>
                <tr>
                  <th>Number</th>
                  <th>Caught Date</th>
                  <th>Caught Time</th>
                  <th>Threshold Passed</th>
                  <th>Amount</th>
                  <th>Payment Status</th>
                </tr>
            </thead>
            <tbody>
              {
                data.map((i)=>(
                    <tr key ={i.vehicleNumber}>
                        <td>{i.vehicleNumber}</td>
                        <td>{i.fineDate}</td>
                        <td>{i.fineTime}</td>
                        <td>{i.thresoldTime}</td>
                        <td>{i.fineAmount}</td>
                        <td>{i.fineStatus}</td>
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

export default Home;