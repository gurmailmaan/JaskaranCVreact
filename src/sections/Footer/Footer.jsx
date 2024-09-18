import React from 'react'
import Giticon from '../../assets/img/instagram.svg'
import Linkedin from '../../assets/img/linkedin.svg'
import Twitter from '../../assets/img/twitter.svg'
import styles from './FooterStyles.module.css'; 

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.talkwithme}>
        <h2>JK</h2>
        <h2>Let's Talk With Me!</h2>
        <p>An open invitation to connect, and exploring collaborative opportunities on my personal portfolio website or <a href="mailto:pjaskaran19@gmail.com">Email Me</a></p>
        
      </div>
      <div className={styles.footericon}>
        <div className={styles.footersocialicon}>
        <a href="https://www.instagram.com/jaskaran0480/" target='_blank'><img src={Giticon} alt="" /></a>
          <a href="https://www.linkedin.com/in/jaskaranpreet/" target='_blank'><img src={Linkedin} alt="" /></a>
          <a href="https://x.com/pr59513" target='_blank'><img src={Twitter} alt="" /></a>
        </div>
        <div className={styles.copyright}>
          <p>Copyright © 2023. All rights reserved.</p>
        </div>
      </div>

    </div>
  )
}

export default Footer