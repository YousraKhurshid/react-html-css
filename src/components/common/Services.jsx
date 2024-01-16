import React from 'react';
import styles from './Services.module.css';

const Services = () => {
  return (
    <div className={styles.Services} id="services-container">
      <h1 className={styles['services-heading']}>Our Services</h1>

      <div className={styles["service"]}>
        <img src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*V-Jp13LvtVc2IiY2fp4qYw.jpeg" alt="Web Development" />
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
        <img src="https://media.licdn.com/dms/image/D4D12AQFCAc9opGujrw/article-cover_image-shrink_720_1280/0/1685613726106?e=1710979200&v=beta&t=7Tt9gAzEmC-05ym8RwQ8h_oIua3cacd_zV986a-XUQI" alt="UI/UX Design" />
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

export default Services;