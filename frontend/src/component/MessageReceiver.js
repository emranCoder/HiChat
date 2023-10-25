import React from "react";

export default function MessageReceiver(props) {
  const currentDate = new Date().getMinutes();
  const dbMinuteGet = new Date(props.receiverTime).getMinutes() + 1;
  return (
    <div className="mess-receiver">
      <div>
        <p className="card card-body mess-card ms-2 mb-0">
          {props.receiverContent}
        </p>
        <span className="time-stamp me-1">
          <i className="bi bi-clock me-2"></i>{" "}
          {dbMinuteGet < currentDate &&
            new Date(props.receiverTime).toLocaleTimeString()}
        </span>
      </div>
    </div>
  );
}
