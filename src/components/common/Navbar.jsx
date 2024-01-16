import React from 'react';
import styles from './Navbar.module.css';
import { Route, Routes, Navigate } from 'react-router-dom';

const Navbar = () => {
  return (
      <nav className={styles.Navbar}>
    <div className={styles['background']}>
    <div className={styles['image-container']}>
                  <img className={styles['animated-image']} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5rXrNVIKojip4SjwCmq9W67hfmmc6oqGJlQ&usqp=CAU" alt="Ring" />
                  <div className={styles['webName']}>
              <h1 className={styles['dummy']}>  My Dummy Web</h1>
             </div>
          </div>
             
          
          <div className={styles['links']}>
            
            <a href="/">Home</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
            <a href="/components/common/Services">Services</a>
            {/* <a href="#portfolio">Portfolio</a> */}
            {/* <a href="#news">News</a> */}
              </div>
              <div>
              <button className={styles['button']} onClick={() => window.location.href="/components/common/Services"}>
            Buy Now
          </button>        </div>
              
     </div>
    </nav>
  );
}

export default Navbar;