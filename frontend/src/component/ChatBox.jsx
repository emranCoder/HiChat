import React from "react";
import ChatList from "./ChatList";
import ConversationBox from "./ConversationBox";
//import EmptyConversation from "./EmptyConversation";

export default function ChatBox() {
  return (
    <div className="container-fluid">
      <div className="row">
        <ChatList />
        <ConversationBox />
        {/* <EmptyConversation /> */}
      </div>
    </div>
  );
}
