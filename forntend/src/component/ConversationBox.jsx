import React from "react";

export default function ConversationBox() {
  return (
    <div className="col-md-9">
      <div className="chat-box h-vh rounded-4 p-2">
        <div className="message-box">
          <div className="mess-footer">
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
