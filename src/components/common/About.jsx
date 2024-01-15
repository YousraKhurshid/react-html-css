import React from 'react'
import styles from './About.module.css';


const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src='https://storage.googleapis.com/gweb-uniblog-publish-prod/images/writing_book_google_docs_header_.width-1200.format-webp.webp'
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src='https://www.shutterstock.com/shutterstock/photos/1542146108/display_1500/stock-photo-female-frontend-developer-sitting-at-a-table-in-the-modern-office-digital-technology-concept-1542146108.jpg' alt="Cursor icon" className={styles.aboutImage}/>
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with experience in building responsive
                and optimized sites
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src='https://img.freepik.com/free-vector/about-us-concept-illustration_114360-639.jpg' alt="Server icon" className={styles.aboutImage}/>
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I have experience developing fast and optimised back-end systems
                and APIs
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src='https://lh3.googleusercontent.com/proxy/3S7yiUYh5fHK-L9hUen-cQACOZI1aL-4jd8do-_pDKN2_evgvm0O4k2xgrgw_nsIzFpTkUr4hynKMPYb9W4-KtGkd2fx5tvsRXeI9MWa43B9vnTw' alt="UI icon" className={styles.aboutImage}/>
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
                I have designed multiple landing pages and have created design
                systems as well
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default About