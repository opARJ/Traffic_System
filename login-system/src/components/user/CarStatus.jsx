import React from "react";
import "./CarStatus.css";

const CarStatus = () => {
  return (
    <div className="car-status">
      <h2>Your Cars</h2>
      <table>
        <thead>
          <tr>
            <th>Car Number</th>
            <th>Model</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>KA03AB1234</td>
            <td>Maruti Suzuki</td>
            <td>Clear</td>
          </tr>
          <tr>
            <td>KA05CD5678</td>
            <td>Honda City</td>
            <td>Pending Fine</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CarStatus;
