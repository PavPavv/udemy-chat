import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import { StoreState } from "../../store/rootReducer";

const Chat = ():JSX.Element => {
  const state = useSelector((state: StoreState) => state);
  
  useEffect(() => {
    console.log('state',state);
  }, [state]);
  
  return (
    <div>Chat</div>
  );
};

export default Chat;