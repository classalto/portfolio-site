/* eslint-disable max-len */
import React from 'react';
import styles from './home.module.css';
import Header from '../components/Header';



const Home = () => {
  return (
    <div className={styles.home}>
      <figure className={styles.box}>
        <div className={styles.wave}></div>
      </figure>
      <Header />
      <section className={styles.heading}>
        <h1>Victor Williams</h1>
        <span>Software Engineer</span>
        <p>Collaborative Engineer solving real-world problems with elegant and efficient solutions. <br/>
        After years of collaborating with peers from a diverse range of backgrounds, I aim to<br/>
        implement seamless and easy to use designs that are team-built and enjoyable to use!</p>
      </section> 
    </div>
  );
};



export default Home;
