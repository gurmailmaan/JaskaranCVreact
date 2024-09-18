import React from 'react';
import styles from './HeaderStyles.module.css'; 
import Giticon from '../../assets/img/github.svg'
import Linkedin from '../../assets/img/linkedin.svg'
import Twitter from '../../assets/img/twitter.svg'

const Header = () => {
  return (
    <div className={styles.headercontainer}> 
      <div className={styles.nav}> 
        <div className={styles.logo}>
          <h2>JK</h2>
        </div>
        <div className={styles.navbar}>
          <ul>
            <li>About</li>
            <li>Work</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
      <div className={styles.hellocontainer}>
        <div className={styles.icon}>
          <img src={Giticon} alt="" />
          <img src={Linkedin} alt="" />
          <img src={Twitter} alt="" />
        </div>
        <div className={styles.hello}>
          <h1>Hello!</h1>
          <p> I am a UI/UX designer and I design custom websites to do better online.</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
