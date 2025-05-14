import React, {useState, useEffect} from "react";
import './Payment.css';
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import IndianMap from './assets/IndianMap.png'

const Payment = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const username = location.state?.username || "User";
    const handelhome = () => {
        navigate("/main", { state: { username } }); 
      };

    //   const data= [
    //      {
    //          Number: 'WB08B9840',
    //          Model: 'Swift',
    //          Colour: 'White',
    //          Owner: 'D Bappi',
    //          DefDoc: 'Insurance',
    //      },
    //      {
    //          Number: 'WB21K1234',
    //          Model: 'Nexon',
    //          Colour: 'Black',
    //          Owner: 'K.C Paul',
    //          DefDoc: 'Insurance',
    //      },
    //      {
    //          Number: 'WB25M9999',
    //          Model: 'Hector',
    //          Colour: 'White',
    //          Owner: 'Rakhal Chandra',
    //          DefDoc: 'Pollution',
    //      },
    //  ]

    const [data, setData] = useState([]);
    const [error, setError] = useState("");

     useEffect(() => {
        fetch("http://ec2-43-205-135-163.ap-south-1.compute.amazonaws.com:8080/police/get-all-vehicle")
            .then(response => response.json())
            .then(async (vehicles) => {
                const updatedVehicles = await Promise.all(
                    vehicles.map(async (vehicle) => {
                        try {
                            const statusResponse = await fetch("http://ec2-43-205-135-163.ap-south-1.compute.amazonaws.com:8080/police/update-fine-status", {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json",
                                },
                                body: JSON.stringify({ vlicensePlate: vehicle.vlicensePlate }),
                            });
                            const statusData = await statusResponse.json();
                            return {
                                ...vehicle,
                                seizeStatus: statusData.seizeStatus || "Unknown"
                            };
                        } catch (error) {
                            console.error(`Error fetching status for ${vehicle.vlicensePlate}:`, error);
                            return { ...vehicle, seizeStatus: "Error" };
                        }
                    })
                );
                setData(updatedVehicles);
            })
            .catch(err => {
                console.error("Error fetching data:", err);
                setError("Failed to load data");
            });
     }, []);


    // Popup State
    const [popup, setPopup] = useState({ show: false, x: 0, y: 0, rowData: null });

    // Handle Row Click
    const handleRowClick = (event, row) => {
        let rect = event.currentTarget.getBoundingClientRect();
        setPopup({
            show: true,
            x: rect.left + window.scrollX + rect.width / 2,
            y: rect.top + window.scrollY + rect.height / 2,
            rowData: row,
      });
  };
   // Close Popup
   const handleClosePopup = () => {
    alert(`${popup.rowData?.vlicensePlate} has been caught!! Flag Raised`);
    setTimeout(() => {
        setPopup({ ...popup, show: false });
    }, 200);
   };

    return (
        <div className="Pay_container">
            <div className="dashboard-header">
                <div className="header-left">
                <h2>Automated Challan Management System</h2>
                <h1>Passing Cars</h1>
              </div>
              <div className="header-right">
                <img src={IndianMap} alt="India Map" className="india-map" />
                <p>Kolkata, India</p>
              </div>
            </div>
        <div className="Bottom">  
        <table>
            <thead>
                <tr>
                  <th>Number</th>
                  <th>model</th>
                  <th>Colour</th>
                  <th>Owner Name</th>
                  <th>Seize status</th>
                </tr>
            </thead>
            <tbody>
                {data.length > 0 && data.map((row, index) => {
                    console.log("Row Data:", row); // Debugging log
                    return (
                        <tr key={row.vlicensePlate || index} onClick={(e) => handleRowClick(e, row)} style={{ cursor: "pointer" }}>
                            <td>{row.vlicensePlate}</td>
                            <td>{row.vmodel}</td>
                            <td>{row.vcolor}</td>
                            <td>{row.vownerName}</td>
                            <td>{row.seizeStatus}</td>
                        </tr>
                    );
                })}
            </tbody>
          </table>
        </div>
         {/* Popup Button */}
         {popup.show && popup.rowData && (
                <div 
                    className="popup"
                    style={{
                        position: "absolute",
                        top: popup.y,
                        left: popup.x,
                        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
                    }}
                >
                    <button onClick={handleClosePopup}>
                        Catch?? 
                        {/* {popup.rowData.Number} */}
                    </button>
                </div>
            )}
        </div>
    );
};

export default Payment;