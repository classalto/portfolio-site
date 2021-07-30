/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';
import { GrLinkedin, GrGithub } from 'react-icons/gr';
import styles from '../containers/home.module.css';

const Header = () => {
  return (
    <div>
      <header>
        <nav className={styles.navigation}>
          <ul className={styles.navlinks}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/resume">Resume</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
          </ul>
        </nav>
        <section className={styles.social}>
          <a
            href="https://www.linkedin.com/in/victor-b-williams/"
            target="_blank"
            rel="noreferrer"
          >
            <GrLinkedin className={styles.GrLinkedin} />
          </a>
          <a
            href="https://github.com/classalto"
            target="_blank"
            rel="noreferrer"
          >
            <GrGithub className={styles.GrGithub} />
          </a>
        </section>
      </header>
    </div>
  );
};

export default Header;
