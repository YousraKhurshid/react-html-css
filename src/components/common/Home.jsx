import React from 'react';
// import { Link } from 'react-router-dom';
import styles from './Home.module.css';


const Home = () => {
  return (
    <div className={styles.Home} id='home-section'>
      <img src='https://www.breacorwin.com/wp-content/uploads/2023/11/web-avatar-design-tips.jpg' alt="Home" className={styles["home-image"]} />
      <div className={styles["text-content"]}>
        <h1>Welcome to Our Website</h1>
        <p>Discover amazing content and explore the possibilities.</p>
        
        <button>Get Started</button>
        
      </div>
    </div>
  );
};

export default Home;