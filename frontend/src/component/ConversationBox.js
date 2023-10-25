import React, { useState } from "react";
import MessageSender from "./MessageSender";
import MessageReceiver from "./MessageReceiver";
import { useSelector } from "react-redux";
import utility from "../redux/storeData";
import { sendMessages } from "../redux/messSlice";

import ScrollToBottom, { useSticky } from "react-scroll-to-bottom";

export default function ConversationBox() {
  const { isLoading, mess } = useSelector((state) => state.mess);

  const uID = utility.get();

  const sticky = useSticky();

  const [newMess, setNewMess] = useState(null);
  const [appendMess, setAppendMess] = useState(null);
  const handleKeypress = async (e) => {
    if (e.code && e.ctrlKey) {
      if (newMess) {
        const data = await sendMessages(uID, newMess, mess._id);
        setNewMess(null);
        e.target.value = null;
        if (appendMess) setAppendMess([...appendMess, data]);
        else setAppendMess([data]);
      }
    }
  };
  const handleMessages = (e) => {
    setNewMess(e.target.value);
  };
  return (
    <div className="col-md-9">
      <div className="chat-box h-vh rounded-4 p-2">
        <div className="message-box">
          <ScrollToBottom sticky className={"message-item mb-5 " + sticky}>
            {isLoading && <p>Data Loading...</p>}
            {mess &&
              mess.message.map((item, index) =>
                uID === item.sender ? (
                  <div className="tr" key={item._id + index}>
                    <MessageReceiver
                      key={item._id + index}
                      id={item._id + index}
                      receiverContent={item.content}
                      receiverStatus={item.status}
                      receiverTime={item.createdAt}
                    />
                  </div>
                ) : (
                  <div className="tr" key={item._id + index}>
                    <MessageSender
                      key={item._id + index}
                      content={item.content}
                      status={item.status}
                      time={item.createdAt}
                    />
                  </div>
                )
              )}
            {appendMess &&
              appendMess.map((item, index) => (
                <div className="tr" key={item._id + index}>
                  <MessageReceiver
                    key={item._id + index}
                    id={item._id + index}
                    receiverContent={item.content}
                    receiverStatus={item.status}
                    receiverTime={item.createdAt}
                  />
                </div>
              ))}
          </ScrollToBottom>
          <div className="mess-footer ">
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
