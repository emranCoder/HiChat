import React from "react";
import MessageSender from "./MessageSender";
import MessageReceiver from "./MessageReceiver";
export default function ConversationBox() {
  return (
    <div className="col-md-9">
      <div className="chat-box h-vh rounded-4 p-2">
        <div className="message-box">
          <div className="message-item">
            <tr>
              <MessageSender />
            </tr>

            <tr>
              <MessageReceiver />
            </tr>
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
