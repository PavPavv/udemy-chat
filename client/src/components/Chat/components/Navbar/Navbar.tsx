import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { StoreState } from "../../../../store/rootReducer";

//  ui
import styles from "./Navbar.module.scss";

const Navbar = (): JSX.Element => {
  const user = useSelector((state: StoreState) => state.auth.user);

  useEffect(() => {
    console.log('user', user)
  }, [user])

  return (
    <div className={`${styles.navbar} card-shadow`}>
      <h2>Chat</h2>
      <div className={`${styles.profileMenu}`}>
        <img src={user?.avatar} alt="avatar" />
        <p>{user?.firstName}</p>
        <p>{user?.lastName}</p>
      </div>
    </div>
  )
};

export default Navbar;