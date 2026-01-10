import Card from "../card/Card";
import styles from "./css/skills.module.css";
import Tech from "./Tech";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import projectsData from "../../data/projects.json";

function Skills() {
    const scrollToProjects = () => {
        const projectsSection = document.getElementById("proj");
        if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fixed = projectsData.map((p) => ({
            ...p,
            Display:
                p.Display?.startsWith("http")
                    ? p.Display
                    : `/portfolio/gif/${p.Display}`,
        }));

        setProjects(fixed);
    }, []);

    return (
        <section className={styles.skillsSection}>
            <div className={styles.homeBtnWrap}>
                <Link to="/" className={styles.homeButton}>
                    <img
                        src="https://api.iconify.design/mdi/home.svg"
                        alt="home"
                        width="18"
                        height="18"
                    />
                </Link>


            </div>

            <Tech fn={scrollToProjects} />

            <h1 id="proj" className={styles.title}>MY PROJECT'S</h1>
            <br />

            <div className={styles.projects}>
                {projects.map((project, index) => (
                    <Card
                        key={index}
                        Title={project.Title}
                        Description={project.Description}
                        Github={project.Github}
                        Display={project.Display}
                    />
                ))}
            </div>
        </section >
    );
}

export default Skills;

