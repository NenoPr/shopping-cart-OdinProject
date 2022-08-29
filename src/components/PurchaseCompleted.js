import React, { useEffect } from "react";
import "./styles/purchase-completed.css";

function PurchaseCompleted(appProps) {
    console.log("PurchaseCompleted appProps from App",appProps)
    useEffect(() => {
        appProps.props.setCart([])
    }, [])
  return (
    <div className="purchase-completed-container">
      <div className="purchase-completed">Purchase Completed!</div>
      <div className="purchase-completed-thank-you">
        Thank you for Purchasing
      </div>
      <span className="purchase-completed-emoji">❤</span>
    </div>
  );
}

export default PurchaseCompleted;
