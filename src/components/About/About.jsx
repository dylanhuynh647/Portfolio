import React from 'react';
import { getImageUrl } from '../../utils';
import styles from './About.module.css';

export const About = () => {
  return <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img 
                className={styles.aboutImage}
                src={getImageUrl("about/aboutImage.png")} 
                alt="Me sitting with a laptop"
            />
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor" />
                    <div className={styles.aboutItemText}>
                        <h3>
                            Full-stack Developer
                        </h3>
                        <p>
                            Skilled in both front-end and back-end technologies including React.js, CSS, Java, SQL, and Python.
                        </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/uiIcon.png")} alt="UI" />
                    <div className={styles.aboutItemText}>
                        <h3>
                            Web Designer
                        </h3>
                        <p>
                            Experienced in designing websites with a focus on user experience and visual aesthetics.
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </section>;
}
