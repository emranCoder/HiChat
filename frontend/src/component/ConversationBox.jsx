import React from "react";
import MessageSender from "./MessageSender";
import MessageReceiver from "./MessageReceiver";
import { useSelector } from "react-redux";
import utility from "../redux/storeData";
export default function ConversationBox() {
  const { isLoading, mess } = useSelector((state) => state.mess);

  const uID = utility.get();

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
