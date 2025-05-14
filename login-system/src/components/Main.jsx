import React from "react";
import './Main.css';
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";


const Main = () => {
  const location = useLocation();
  const username = location.state?.username || "User"; // Default to "User" if no username is passed
  const navigate = useNavigate();
  const handelLogout = () => {
    localStorage.removeItem('authToken');
    sessionStorage.clear();
    navigate('/');
  };
  return (
    <div className="main">
      <h1>Available Cars:</h1>
      <div className="main_container">
        <table>
            <head>
              <tr>
                <th>Number</th>
                <th>Model</th>
                <th>Colour</th>
                <th>Caught?</th>
              </tr>
              <tr>
                <td>
                  WB08b9849
                </td>
                <td>
                  Swift
                </td>
                <td>
                  Red
                </td>
                <td>
                  
                </td>
              </tr>
            </head>
        </table>
    </div>
    </div>
  );
};

export default Main;
