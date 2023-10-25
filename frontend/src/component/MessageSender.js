import React from "react";
import utility from "../redux/storeData";
export default function MessageSender(props) {
  const currentDate = new Date().getMinutes();
  const dbMinuteGet = new Date(props.time).getMinutes() + 1;

  return (
    <div className="mess-sender d-flex ">
      <div className="sender-img chat-circle-img">
        <img
          src={"http://localhost:5000/avatar/" + utility.getSenderAvatar()}
          alt="sender-img"
        />
      </div>
      <div>
        <p className="card card-body mess-card ms-2 mb-0">{props.content}</p>
        <span className="time-stamp me-1">
          <i className="bi bi-clock me-2"></i>
          {dbMinuteGet < currentDate &&
            new Date(props.time).toLocaleTimeString()}
        </span>
      </div>
    </div>
  );
}
