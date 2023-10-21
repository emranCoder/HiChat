import React from "react";
import ChatListItem from "./ChatListItem";

export default function ChatList() {
  return (
    <div className="col-md-3 col-lg-3 col-xl-3 bg-light">
      <h3>All Chat</h3>
      <ul className="list-group list-group-flush">
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
      </ul>
    </div>
  );
}
