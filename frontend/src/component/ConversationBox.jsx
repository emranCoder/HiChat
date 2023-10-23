import React, { useEffect, useState } from "react";
import MessageSender from "./MessageSender";
import MessageReceiver from "./MessageReceiver";

export default function ConversationBox() {
  const [mess, setMess] = useState(null);
  useEffect(() => {
    console.log("running...");
    fetchChats();
  }, []);
  const id = "65353936cf2ff71dce64ca42";
  const uId = "65327969361a957ae14938da";
  const fetchChats = async () => {
    await fetch(`http://localhost:5000/api/chat/allmess/${id}`, {
      method: "get",
    })
      .then((response) => response.json())
      .then((data) => {
        setMess(data.chats.message);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(mess);
  return (
    <div className="col-md-9">
      <div className="chat-box h-vh rounded-4 p-2">
        <div className="message-box">
          <div className="message-item">
            {mess &&
              mess.map((item, index) =>
                uId == item.sender ? (
                  <div className="tr" key={item._id + index}>
                    <MessageSender
                      key={item._id + index}
                      content={item.content}
                      status={item.status}
                      time={item.createdAt}
                    />
                  </div>
                ) : (
                  <div className="tr" key={item._id + index}>
                    <MessageReceiver
                      key={item._id + index}
                      id={item._id + index}
                      receiverContent={item.content}
                      receiverStatus={item.status}
                      receiverTime={item.createdAt}
                    />
                  </div>
                )
              )}
          </div>
          <div className="mess-footer mt-5">
            <input
              type="text"
              className="message-input"
              id="message"
              aria-describedby="emailHelp"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
