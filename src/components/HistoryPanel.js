import React from "react";
import "./HistoryPanel.css";

const HistoryPanel = ({ children }) => {
  const handleClearHistory = () => {
    localStorage.removeItem("calculatorHistory");
    window.location.reload();
  };

  return (
    <>
      <div className="history-header">
        <h3>History</h3>
      </div>
      <ul className="history-area">{children}</ul>
      <button className="clear-history" onClick={handleClearHistory}>
        Clear History
      </button>
    </>
  );
};

export default HistoryPanel;
