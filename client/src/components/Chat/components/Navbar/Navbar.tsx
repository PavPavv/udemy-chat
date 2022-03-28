import React, { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome';

import { logoutAction } from "../../../../store/auth/actions";
import { updateUserActionThunk } from "../../../../store/user/actions";
import authService from "../../../../services/authService";

//  ui
import Modal from "../../../Modal/Modal";
import styles from "./Navbar.module.scss";
import { blob } from "stream/consumers";

type FormType = {
  firstName : string;
  lastName: string;
  email: string;
  age: string;
  sex: string;
  password: string;
  avatar: string;
};

const Navbar = (): JSX.Element => {
  const dispatch = useDispatch();
  const storedUser = JSON.parse(localStorage.getItem(`${authService._appStorageName}_user`) || '');
  const user = storedUser.user;
  const [showProfileOptions, setProfileOptions] = useState(false);
  const [showProfileModal, setProfileModal] = useState(false);
  const [firstName, setFirstName] = useState(user.firstName || '');
  const [lastName, setLastName] = useState(user.lastName || '');
  const [email, setEmail] = useState(user.email || '');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState(user.age || 18);
  const [sex, setSex] = useState(user.sex || 'male');
  const [avatar, setAvatar] = useState(user.avatar || '');

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault()
    const userId = user.id;
    console.log(userId);

    const form: any = {
      id: userId,
      firstName,
      lastName,
      email,
      age,
      sex,
      password,
      avatar,
    };

    if (password.length > 0) {
      form.password = password;
    }

    const formData = new FormData();
    for (const key in form) {
      formData.append(key, form[key]);
    }

    dispatch(updateUserActionThunk(formData));
    setProfileModal(false);
  };

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
              <h3 className="m-0">Update profile</h3>
            </Fragment>
            <Fragment key="body">
              <form>
                <div className="mb-1">
                  <input
                    type="text" 
                    placeholder='First name'
                    value={firstName}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFirstName(e.target.value)}
                  />
                </div>

                <div className="mb-1">
                  <input 
                    type="text"
                    placeholder="Last name"
                    value={lastName}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLastName(e.target.value)}
                  />
                </div>

                <div className="mb-1">
                  <select 
                    onChange={
                      (e: React.ChangeEvent<HTMLSelectElement>) => 
                        setSex(e.target.value)
                    }
                    value={sex}
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>

                <div className="mb-1">
                  <input 
                    type="number" 
                    min="18" 
                    max="99" 
                    placeholder='Age'
                    value={age}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAge(e.target.value)}
                  />
                </div>

                <div className="mb-1">
                  <input 
                    type="email" 
                    placeholder='Email'
                    value={email}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                  />
                </div>

                <div className="mb-1">
                  <input 
                    type="password" 
                    placeholder='Password'
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                  />
                </div>

                <div className="mb-1">
                  <input 
                    type="file" 
                    onChange={
                      (e: React.ChangeEvent<HTMLInputElement>) => 
                        setAvatar(e.target.files ? e.target.files[0] : '')
                    }
                  />
                </div>
              </form>
            </Fragment>
            <Fragment key="footer">
            <button 
              type="submit"
              className={styles.btnSuccess}
              onClick={handleSubmit}
              >
                Update
            </button>
            </Fragment> 
          </Modal>
        }
      </div>
    </div>
  )
};

export default Navbar;