import React from "react";

export default function ChatListItem() {
  return (
    <li className="list-group-item rounded-pill d-flex justify-normal mouse-pointer mouse-pointer-hover">
      <div className="chat-circle-img avatar-img position-relative">
        <img
          src="https://images.unsplash.com/photo-1604514628550-37477afdf4e3?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZWxzfGVufDB8fDB8fHww"
          alt="avatar"
        />
        <span className="status"></span>
      </div>
      <div className="avatar-title">
        <p>An item</p>
        <span>I am busy now</span>
      </div>
      <span className="badge bg-primary rounded-pill h-full mt-auto mb-auto  mx-auto ">
        14
      </span>
    </li>
  );
}
