import React from "react";
import "./PaymentHistory.css";

const PaymentHistory = () => {
  return (
    <div className="payment-history">
      <h2>Payment History</h2>
      <ul>
        <li>March 2025 - ₹500 - Paid</li>
        <li>February 2025 - ₹300 - Paid</li>
        <li>January 2025 - ₹700 - Failed</li>
      </ul>
    </div>
  );
};

export default PaymentHistory;
