import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { registerActionThunk } from "../../store/auth/actions";

// ui
import RegisterImage from '../../assests/images/register.svg';
import styles from './Auth.module.scss';

const Register = ():JSX.Element => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState('');
  const [sex, setSex] = useState('Male');

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault()
    dispatch(registerActionThunk({
      firstName,
      lastName,
      email,
      password,
      age,
      sex,
    }, navigate));
  };

  return (
    <div className={styles.authContainer}>
      <div className={styles.authCard}>
        <div className="card-shadow">
          <div className={styles["image-section"]}>
            <img src={RegisterImage} alt="Login" />
          </div>

          <div className={styles.formSection}>
            <h2>Create an account</h2>
            <form onSubmit={handleSubmit}>
              <div className={styles.inputField}>
                <input 
                  type="text" 
                  placeholder='First name'
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFirstName(e.target.value)}
                />
              </div>

              <div className={styles.inputField}>
                <input 
                  type="text" 
                  placeholder='Last name'
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLastName(e.target.value)}
                />
              </div>

              <div className={`${styles.inputField} mb-1`}>
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

              <div className={styles.inputField}>
                <input 
                  type="number" 
                  min="18" 
                  max="99" 
                  placeholder='Age'
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAge(e.target.value)}
                />
              </div>

              <div className={styles.inputField}>
                <input 
                  type="email" 
                  placeholder='Email'
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                />
              </div>

              <div className={styles.inputField}>
                <input 
                  type="password" 
                  placeholder='Password'
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                />
              </div>

              <button type="submit">Create</button>
            </form>

            <p>Already have an account? <Link to="/login">Login</Link></p>
          </div>
        </div>
      </div>
    </div> 
  );
};

export default Register;