/* eslint-disable max-len */
import React from 'react';
import styles from './home.module.css';
import { GrLinkedin, GrGithub } from 'react-icons/gr';

const Home = () => {
  return (
    <div className={styles.home}>
      <figure className={styles.box}>
        <div className={styles.wave}></div>
      </figure>
      <header>
        <nav className={styles.navigation}>
          <ul className={styles.navlinks}>
            <li>Resume</li>
            <li>Projects</li>
          </ul>
        </nav>
        <section className={styles.social}>
          <a src="https://www.linkedin.com/in/victor-b-williams/"><GrLinkedin className={styles.GrLinkedin} /></a>
          <a src="https://github.com/classalto"><GrGithub className={styles.GrGithub} /></a>
        </section>      
      </header> 
      <section className={styles.heading}>
        <h1>Victor Williams</h1>
        <span>Software Engineer</span>
        <p>Collaborative Engineer solving real-world problems with elegant and efficient solutions. <br/>
        After years of collaborating with peers from a diverse range of backgrounds, <br/>
        I aim to implement seamless and easy to use designs that are team-built and enjoyable to use!</p>
      </section>     
    </div>
  );
};

export default Home;
