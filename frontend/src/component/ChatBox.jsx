import React from "react";
import ChatList from "./ChatList";
import ConversationBox from "./ConversationBox";
import { useSelector } from "react-redux";
import EmptyConversation from "./EmptyConversation";

export default function ChatBox() {
  const { isLoading, mess } = useSelector((state) => state.mess);
  return (
    <div className="container-fluid">
      <div className="row">
        <ChatList />
        {(mess && <ConversationBox />) || <EmptyConversation />}
      </div>
    </div>
  );
}
