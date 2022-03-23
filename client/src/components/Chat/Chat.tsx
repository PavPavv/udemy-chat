import React from "react";

//  ui
import Navbar from "./components/Navbar/Navbar";

const Chat = ():JSX.Element => {  
  return (
    <div className="chat-container">
      <Navbar />
      <div className="chat-wrap">Chat</div>
    </div>
  );
};

export default Chat;