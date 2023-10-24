import React from "react";
import ChatList from "./ChatList";
import ConversationBox from "./ConversationBox";
import { useSelector } from "react-redux";
import EmptyConversation from "./EmptyConversation";

export default function ChatBox() {
  const { mess } = useSelector((state) => state.mess);

  const handleChats = (e) => {
    console.log(e);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <ChatList handleChats={handleChats} />
        {(mess && <ConversationBox />) || <EmptyConversation />}
      </div>
    </div>
  );
}
