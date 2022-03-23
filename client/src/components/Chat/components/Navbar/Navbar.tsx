import React, { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome';

import { logoutAction } from "../../../../store/auth/actions";
import authService from "../../../../services/authService";

//  ui
import Modal from "../../../Modal/Modal";
import styles from "./Navbar.module.scss";

const Navbar = (): JSX.Element => {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem(`${authService._appStorageName}_user`) || '').user;
  const [showProfileOptions, setProfileOptions] = useState(false);
  const [showProfileModal, setProfileModal] = useState(false);

  const handleLogout = (): void => {
    dispatch(logoutAction())
  };

  return (
    <div className={`${styles.navbar} card-shadow`}>
      <h2>Chat</h2>
      <div 
        className={`${styles.profileMenu}`} 
        onClick={() => setProfileOptions(!showProfileOptions)}
      >
        <img src={user?.avatar} alt="avatar" />
        <p>{user?.firstName} {user?.lastName}</p>
        <FontAwesomeIcon 
          icon='caret-down' 
          className={styles.faIcon} 
        />

        {showProfileOptions && (
          <div className={styles.profileOptions}>
            <p onClick={() => setProfileModal(true)}>Update profile</p>
            <p onClick={handleLogout}>Logout</p>
          </div>
        )}

        {showProfileModal &&
          <Modal clicked={() => setProfileModal(false)}>
            <Fragment key="header">
              Modal header
            </Fragment>
            <Fragment key="body">
              Modal body
            </Fragment>
            <Fragment key="footer">
              Modal header
            </Fragment> 
          </Modal>
        }
      </div>
    </div>
  )
};

export default Navbar;