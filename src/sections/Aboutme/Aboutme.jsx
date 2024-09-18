import React from 'react'
import styles from './AboutmeStyles.module.css'; 


const Aboutme = () => {
  return (
    <div className={styles.container}>
      <div className={styles.aboutme}>
        <h2>Bit About Me</h2>
        <p>A passionate web designer with a creative flair and a knack for turning visions into reality. My journey in web development began with a fascination for coding and design, and it has evolved into a career where I blend aesthetics with functionality. With a focus on user experience and a commitment to staying updated with the latest industry trends, I'm dedicated to creating web solutions that not only meet but exceed expectations.</p>
        <a href="">Download CV</a>
      </div>
      <div className={styles.photo}>
          
        </div>
    </div>
  )
}

export default Aboutme