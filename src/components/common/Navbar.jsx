import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
      <nav className={styles.Navbar}>
    <div className={styles['background']}>
    <div className={styles['image-container']}>
                  <img className={styles['animated-image']} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5rXrNVIKojip4SjwCmq9W67hfmmc6oqGJlQ&usqp=CAU" alt="Ring" />
                  <div className={styles['webName']}>
              <h1>  My Dummy Web</h1>
             </div>
          </div>
             
          
          <div className={styles['links']}>
            
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
            <a href="#services">ServicesPage</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#news">News</a>
              </div>
              <div>
            <button className={styles['button'] }> <a className={styles['buynow'] } href="#buynow">Buy Now</a></button>
        </div>
              
     </div>
    </nav>
  );
}

export default Navbar;