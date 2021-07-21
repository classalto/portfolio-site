/* eslint-disable max-len */
import React from 'react';
import styles from './home.module.css';
import linkedin from '../assets/linkedin.svg';
import github from '../assets/github.svg';

const Home = () => {
  return (
    <div className={styles.home}>
      <aside className={styles.box}>
        <div className={styles.wave}></div>
      </aside>
      <section className={styles.heading}>
        <h1>Victor Williams</h1>
        <span>Software Engineer</span>
        <p>Collaborative Engineer solving real-world problems with elegant and efficient solutions. <br/>
        After years of collaborating with peers from a diverse range of backgrounds, <br/>
        I aim to implement seamless and easy to use designs that are team-built and enjoyable to use!</p>
      </section>      
      <nav className={styles.navlinks}>
        <span>Resume</span>
        <span>Projects</span>
      </nav>
      <section className={styles.social}>
        <img src={linkedin} alt="linkedin" />
        <img src={github} alt="github" />
      </section>
    </div>
  );
};

export default Home;
