import React, { useEffect } from "react";
import ChatListItem from "./ChatListItem";
import { useState } from "react";

export default function ChatList() {
  const [chat, setChat] = useState(null);
  useEffect(() => {
    console.log("running...");
    fetchChats();
  }, []);

  const fetchChats = async () => {
    await fetch(
      "http://localhost:5000/api/chat/allchats/65327969361a957ae14938da",
      {
        method: "get",
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setChat(data.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <div className="col-md-3 col-lg-3 col-xl-3 bg-light">
      <h3>All Chat</h3>
      <ul className="list-group list-group-flush">
        {chat &&
          chat.map((item) => (
            <ChatListItem
              key={item.receiver._id}
              avatar={item.receiver.avatar}
              name={item.receiver.fName + " " + item.receiver.lName}
              username={item.receiver.username}
            />
          ))}
      </ul>
    </div>
  );
}
