import React, { useState } from "react";
import { Link } from "react-router-dom";
import authService from "../../services/authService";

//  ui
import LoginImage from '../../assests/images/login.svg';
import styles from './Auth.module.scss';

const Login = ():JSX.Element => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    console.log({
      email,
      password,
    });
    authService.login({email, password})
      .then(res => {
        console.log(res)
      })
  };

  return (
    <div className={styles.authContainer}>
      <div className={styles.authCard}>
        <div className="card-shadow">
          <div className={styles["image-section"]}>
            <img src={LoginImage} alt="Login image" />
          </div>

          <div className={styles.formSection}>
            <h2>Welcome</h2>
            <form onSubmit={handleSubmit}>
              <div className={styles.inputField}>
                <input
                  name="email" 
                  type="email" 
                  placeholder='your@email.com'
                  required
                  value={email}
                  onChange={handleChangeEmail}
                />
              </div>

              <div className={styles.inputField}>
                <input
                  name="password"
                  type="password" 
                  placeholder='Strong password'
                  required
                  value={password}
                  onChange={handleChangePassword}
                />
              </div>

              <button type="submit">Login</button>
            </form>

            <p>Don't have an account? <Link to="/register">Register</Link></p>
          </div>
        </div>
      </div>
    </div>  
  );
};

export default Login;