import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const Chat = ():JSX.Element => {
  const state = useSelector((state) => state);
  
  useEffect(() => {
    console.log('state',state);
  }, [state]);
  
  return (
    <div>Chat</div>
  );
};

export default Chat;