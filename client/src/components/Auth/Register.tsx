import { Link } from "react-router-dom";

// ui
import RegisterImage from '../../assests/images/register.svg';
import styles from './Auth.module.scss';

const Register = ():JSX.Element => {
  return (
    <div className={styles.authContainer}>
      <div className={styles.authCard}>
        <div className="card-shadow">
          <div className={styles["image-section"]}>
            <img src={RegisterImage} alt="Login image" />
          </div>

          <div className={styles.formSection}>
            <h2>Create an account</h2>
            <form onSubmit={() => console.log('submit')}>
              <div className={styles.inputField}>
                <input type="text" placeholder='First name' />
              </div>

              <div className={styles.inputField}>
                <input type="text" placeholder='Last name' />
              </div>

              <div className={`${styles.inputField} mb-1`}>
                <select>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>

              <div className={styles.inputField}>
                <input type="number" min="18" max="99" placeholder='Age' />
              </div>

              <div className={styles.inputField}>
                <input type="email" placeholder='Email' />
              </div>

              <div className={styles.inputField}>
                <input type="password" placeholder='Password' />
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