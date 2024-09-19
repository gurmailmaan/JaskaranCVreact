import React from 'react';
import styles from './HeaderStyles.module.css';
import Giticon from '../../assets/img/instagram.svg';
import Linkedin from '../../assets/img/linkedin.svg';
import Twitter from '../../assets/img/twitter.svg';

const Header = ({ aboutRef, workRef, contactRef }) => {

  // Scroll to the referenced section
  const handleScroll = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={styles.headercontainer}>
      <div className={styles.nav}>
        <div className={styles.logo}>
          <h2>JK</h2>
        </div>
        <div className={styles.navbar}>
          <ul>
            <li onClick={() => handleScroll(aboutRef)}>About</li>
            <li onClick={() => handleScroll(workRef)}>Work</li>
            <li onClick={() => handleScroll(contactRef)}>Contact</li>
          </ul>
        </div>
      </div>
      <div className={styles.hellocontainer}>
        <div className={styles.icon}>
          <a href="https://www.instagram.com/jaskaran0480/" target='_blank'>
            <img src={Giticon} alt="Instagram" />
          </a>
          <a href="https://www.linkedin.com/in/jaskaranpreet/" target='_blank'>
            <img src={Linkedin} alt="LinkedIn" />
          </a>
          <a href="https://x.com/pr59513" target='_blank'>
            <img src={Twitter} alt="Twitter" />
          </a>
        </div>
        <div className={styles.hello}>
          <h1>Hello!</h1>
          <p>I am a <span>UI/UX designer</span> and I design custom websites to do better online.</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
