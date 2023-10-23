import React from "react";

export default function ChatListItem(props) {
  return (
    <li className="list-group-item rounded-pill d-flex justify-normal mouse-pointer mouse-pointer-hover">
      <div className="chat-circle-img avatar-img position-relative">
        <img
          src={"http://localhost:5000/avatar/" + props.avatar}
          alt="avatar"
        />
        <span className="status"></span>
      </div>
      <div className="avatar-title">
        <p>{props.name}</p>
        <span>I am busy now</span>
      </div>
      <span className="badge bg-primary rounded-pill h-full mt-auto mb-auto  mx-auto ">
        14
      </span>
    </li>
  );
}
