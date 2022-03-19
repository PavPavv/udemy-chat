import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import { StoreState } from "../../store/rootReducer";

//  ui
import Navbar from "./components/Navbar/Navbar";

const Chat = ():JSX.Element => {
  const state = useSelector((state: StoreState) => state);
  
  useEffect(() => {
    console.log('state',state);
  }, [state]);
  
  return (
    <div className="chat-container">
      <Navbar />
      <div className="chat-wrap">Chat</div>
    </div>
  );
};

export default Chat;