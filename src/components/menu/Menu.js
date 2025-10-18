import styles from './css/menu.module.css';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

function Menu() {
    return (
        <div className={styles.topBar}>
            <div className={styles.notch}>
                <a href="https://github.com/rishabh1244" target="_blank" rel="noreferrer">
                    <FaGithub className={styles.icon} />
                </a>
                <a href="https://www.linkedin.com/in/rishabh-kumar-389334383/" target="_blank" rel="noreferrer">
                    <FaLinkedin className={styles.icon} />
                </a>
                <a href="https://twitter.com/Rishabh1244" target="_blank" rel="noreferrer">
                    <FaTwitter className={styles.icon} />
                </a>
            </div>
        </div>
    );
}

export default Menu;

