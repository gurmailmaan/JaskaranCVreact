import React from 'react'
import styles from './SkillsStyles.module.css'; 
import Mobile from '../../assets/img/mobile.svg';
import Esolutions from '../../assets/img/esolutions.svg';
import Websolutions from '../../assets/img/websolutions.svg'

const Skills = () => {
  return (
    <div className={styles.skillcontainer}>
      <div className={styles.websolutions}>
        <div className={styles.websolutionscontent}>
          <h3>Web Solutions</h3>
          <p>I craft user-friendly interfaces that engage visitors and help you achieve your online goals with minimum efforts.</p>
          <div className={styles.list}>
            <ul>
              <li>Mobile</li>
              <li>UI/UX</li>
              <li>Website Design</li>
              <li>Branding</li>
            </ul>
          </div>
        </div>
        <div className={styles.websolutionsimage}></div>
      </div>
      <div className={styles.esolutions}>
        <div className={styles.esolutionscontent}>
        <h3>E-commerce Solutions</h3>
          <p>I build secure, scalable, and user-centric online stores that enhance the shopping experience and drive conversions.</p>
          <div className={styles.list}>
            <ul>
              <li>Programming</li>
              <li>Landing Pages</li>
            </ul>
          </div>
        </div>
        <div className={styles.esolutionsimage}></div>
      </div>
      <div className={styles.mobilesolutions}>
        <div className={styles.mobilesolutionsontent}>
        <h3>Mobile  Development</h3>
          <p>I design apps that deliver seamless performance and keep users coming back for more.</p>
          <div className={styles.list}>
            <ul >
              <li>Interactive</li>
              <li>Brand Positioning</li>
              <li>Art Direction</li>
              <li>Concept Development</li>
            </ul>
          </div>
        </div>
        <div className={styles.mobilesolutionsimage}></div>
      </div>
    </div>
  )
}

export default Skills