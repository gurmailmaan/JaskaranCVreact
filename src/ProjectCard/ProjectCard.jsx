import React from 'react';
import styles from './Projectcard.module.css';

function ProjectCard({ src, link, h3 }) {
  return (
    <div className={styles.projectcardcontainer}>
    <a href={link} target="_blank">
      <img className="hover" src={src} alt={`${h3} logo`} />
      <h3>{h3}</h3>
    </a>
    </div>
  );
}

export default ProjectCard;
