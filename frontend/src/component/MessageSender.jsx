import React from "react";

export default function MessageSender(props) {
  return (
    <div className="mess-sender d-flex ">
      <div className="sender-img chat-circle-img">
        <img
          src="https://www.itl.cat/pngfile/big/289-2896659_beautiful-girl-wallpaper-download-beautiful-girl-wallpaper-hd.jpg"
          alt="sender-img"
        />
      </div>
      <div>
        <p className="card card-body mess-card ms-2 mb-0">{props.content}</p>
        <span className="time-stamp me-1">
          <i className="bi bi-clock me-2"></i> {props.time}
        </span>
      </div>
    </div>
  );
}
