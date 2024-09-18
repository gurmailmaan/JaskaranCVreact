import React from 'react'
import styles from './MyworkStyles.module.css'; 
import ProjectCard from '../../ProjectCard/ProjectCard'
import project1 from '../../assets/img/project-1.jpg'
import project2 from '../../assets/img/project-2.jpg'
import project3 from '../../assets/img/project-3.jpg'
import project4 from '../../assets/img/project-4.jpg'
import project5 from '../../assets/img/project-5.jpg'
import project6 from '../../assets/img/project-6.jpg'
import project7 from '../../assets/img/project-7.jpg'
import project8 from '../../assets/img/project-8.jpg'

const Mywork = () => {
  return (
    <div className={styles.myworkcontainer}>
      <h1>My Work</h1>
      <div className={styles.container}>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={project1}
          link="https://9on9.netlify.app/"
          h3="9on9 Jalfa Games"
        />
        <ProjectCard
          src={project2}
          link="https://drive.google.com/file/d/15YwGVuiR5HRMI6Kyb5tmthI1dCSte_fB/view"
          h3="EV Bikes"
        />

        <ProjectCard
          src={project3}
          link="https://drive.google.com/file/d/1bWECXCcA7kqgJ9AUoUHKYcFAen9MbMSh/view"
          h3="Anthony's Recipe"
        />  
        
        <ProjectCard
          src={project4}
          link="https://drive.google.com/file/d/1rxnBuNGGTg6QlwKX9HAS_aJbJwZ9104P/view"
          h3="Cake Bakery"
        /> 
        <ProjectCard
          src={project7}
          link="https://drive.google.com/file/d/1hl6dzaYztaj7RujpT6CV0-Xpb34nwRA8/view"
          h3="Pixel Army"
        /> 
        <ProjectCard
          src={project8}
          link="https://drive.google.com/file/d/1jiHjYqSzcLBHdGsj4eWKyLG5HHTaYhnM/view"
          h3="The Barber Shop"
        /> 

        
      </div>
      </div>
    </div>
  )
}

export default Mywork