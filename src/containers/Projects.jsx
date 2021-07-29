import React from 'react';
import Header from '../components/Header';
import styles from '../containers/home.module.css';

const Projects = () => {
  return (
    <>
      <figure className={styles.box}>
        <div className={styles.wave}></div>
      </figure>
      <Header />
      <h1>project page</h1>
    </>
  );
};

export default Projects;
