import React from "react";

export default function MessageReceiver() {
  return (
    <div className="mess-receiver">
      <div>
        <p className="card card-body mess-card ms-2 mb-0">
          This is some text within a card body.
        </p>
        <span className="time-stamp me-1">
          <i className="bi bi-clock me-2"></i> 10:05 PM
        </span>
      </div>
    </div>
  );
}
