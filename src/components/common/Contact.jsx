import React from "react";
import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out! Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src='https://cdn0.iconfinder.com/data/icons/cosmo-work/40/mail-512.png' alt="Email icon" />
          <a href="mailto:myemail@email.com">myemail@email.com</a>
        </li>
        <li className={styles.link}>
          <img
            src='https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png'
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/YousraKhurshid">linkedin.com/myname</a>
        </li>
        <li className={styles.link}>
          <img src='https://pngimg.com/uploads/github/github_PNG83.png' alt="Github icon" />
          <a href="https://www.github.com/myname">github.com/myname</a>
        </li>
      </ul>
    </footer>
  );
};
export default Contact