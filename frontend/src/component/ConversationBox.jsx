import React, { useEffect, useState } from "react";
import MessageSender from "./MessageSender";
import MessageReceiver from "./MessageReceiver";
import { useSelector } from "react-redux";
import utility from "../redux/storeData";
export default function ConversationBox() {
  const scrollBardBottom = () => {
    const item = document.querySelector(".message-box .message-item");
    item.scrollTop = item.scrollHeight;
  };

  useEffect(() => {
    scrollBardBottom();
  }, []);

  const { isLoading, mess } = useSelector((state) => state.mess);

  const uID = utility.get();

  const [newMess, setNewMess] = useState(null);

  const handleKeypress = (e) => {
    if (e.code && e.ctrlKey) {
      console.log(e.target);
    }
  };
  const handleMessages = (e) => {
    setNewMess(e.target.value);
  };

  return (
    <div className="col-md-9">
      <div className="chat-box h-vh rounded-4 p-2">
        <div className="message-box">
          <div className="message-item">
            {isLoading && <p>Data Loading...</p>}
            {mess &&
              mess.map((item, index) =>
                uID === item.sender ? (
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
              onKeyPress={handleKeypress}
              onChange={handleMessages}
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
