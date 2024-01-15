import React from 'react';
import styles from './ServicesPage.module.css';

const ServicesPage = () => {
  return (
    <div className={styles.ServicesPage} id="services-container">
      <h1>Our Services</h1>

      <div className={styles["service"]}>
        <img src="https://www.elegantthemes.com/blog/wp-content/uploads/2018/12/top11.png" alt="Web Development" />
        <div className={styles["service-content"]}>
          <h2>Web Development</h2>
          <p>
            We offer top-notch web development services using the latest
            technologies to build scalable and responsive web applications.
          </p>
        </div>
      </div>

      <div className={styles["service"]}>
        <img src="https://images.yourstory.com/cs/1/d05f0f20ee7011ea887bf56a537694f1/Image1-1599201989726.jpg?w=1152&fm=auto&ar=2:1&mode=crop&crop=faces" alt='' />
        <div className={styles["service-content"]}>
          <h2>Mobile App Development</h2>
          <p>
            Our experienced team can create mobile applications for iOS and
            Android platforms, ensuring a seamless user experience.
          </p>
        </div>
      </div>

      <div className={styles["service"]}>
        <img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20221219162542/Become-UI-Designer-in-2023.png" alt="UI/UX Design" />
        <div className={styles["service-content"]}>
          <h2>UI/UX Design</h2>
          <p>
            Transform your ideas into visually appealing designs with our UI/UX
            design services. We focus on creating intuitive and user-friendly
            interfaces.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;