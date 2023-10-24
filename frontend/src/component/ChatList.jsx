import React, { useEffect } from "react";
import ChatListItem from "./ChatListItem";
import { fetchChats } from "../redux/createSlice";
import { useDispatch, useSelector } from "react-redux";

export default function ChatList() {
  const { isLoading, chats, err } = useSelector((state) => state.chat);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchChats());
  }, [dispatch]);

  return (
    <div className="col-md-3 col-lg-3 col-xl-3 bg-light">
      <h3>All Chat</h3>
      <ul className="list-group list-group-flush">
        {isLoading && <p>Is Loading</p>}
        {chats &&
          chats.map((item) => (
            <ChatListItem
              key={item._id}
              senderId={item.sender}
              messId={item._id}
              avatar={item.receiver.avatar}
              name={item.receiver.fName + " " + item.receiver.lName}
              username={item.receiver.username}
            />
          ))}
        {err && <p>{err}</p>}
      </ul>
    </div>
  );
}
