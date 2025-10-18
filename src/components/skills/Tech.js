import styles from "./css/tech.module.css";

function Tech({ fn }) {
    const skills = [
        { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "Express", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
        { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Linux", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
        { name: "C", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
        { name: "C++", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
        { name: "Rust", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-original.svg" },
        { name: "Actix", logo: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/actix.svg" },
        { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "2D Game Dev", logo: "https://cdn-icons-png.flaticon.com/512/1079/1079873.png" },
        { name: "SFML", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a0/SFML_Logo.svg" },
        { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
        { name: "Redis", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
        { name: "Arduino", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg" },
    ];

    return (
        <div className={styles.techPage}>
            <h1 className={styles.heading}>MY TECH STACK</h1>
            <div className={styles.techGrid}>
                {skills.map((skill, i) => (
                    <div key={i} className={styles.techCard}>
                        <img src={skill.logo} alt={skill.name} className={styles.techLogo} />
                        <span className={styles.techName}>{skill.name}</span>
                    </div>
                ))}

                {/* PROJECTS BUTTON */}
                <div
                    className={`${styles.techCard} ${styles.projectCard}`}
                    onClick={fn}
                >
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
                        alt="Projects"
                        className={styles.techLogo}
                    />
                    <span className={styles.techName}>PROJECTS ↓</span>
                </div>
            </div>
        </div>
    );
}

export default Tech;

