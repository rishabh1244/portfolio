import Card from "../card/Card";
import styles from "./css/skills.module.css";
import Tech from "./Tech"

import { Link } from "react-router-dom";
function Skills() {
    const scrollToProjects = () => {
        const projectsSection = document.getElementById("proj");
        if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    // 🧠 Store all project data in an array
    const projects = [
        {
            Title: "Break The Code",
            Description: `A problem-solving platform where devs "Break-The-Code" while an LLM attempts to fix it.`,
            Github: "https://github.com/rishabh1244/Break-The-Code",
            Display: "https://cdn.discordapp.com/attachments/1267333890553675776/1428946029885128764/output2-ezgif.com-video-to-gif-converter.gif?ex=68f45932&is=68f307b2&hm=2c9e72da7ea59dbcbb74c925299ed838edc3199e4f3e299e859f552c75cce123&",
        },
        {
            Title: "RayCaster.",
            Description: `A simple RayCaster written in JavaScript using the Canvas API.`,
            Github: "https://github.com/rishabh1244/raycasting-js",
            Display: "https://cdn.discordapp.com/attachments/1267333890553675776/1428939918956171355/final.gif?ex=68f45381&is=68f30201&hm=841559cfa2b5479c3d750791fa0eb96775138b2be76ac2c04da9d78c7150caae&",
        },
        {
            Title: "Sorting Algorithm Vis.",
            Description: `A graphical interface built in C using RayLib to visualize how sorting algorithms work.`,
            Github: "https://github.com/rishabh1244/sorting-algo-visualiser",
            Display: "https://panthema.net/2013/sound-of-sorting/thumb.gif",
        },

        {
            Title: "Neural Network in C.",
            Description: `Implimented a basic feedforward Neural Network in C and Visualiser using Raylib Library`,
            Github: "https://github.com/rishabh1244/Neural-Network-C",
            Display: "https://charonhub.deeplearning.ai/content/images/2022/09/dfbcdc70-a9a2-4967-95b8-6866a6a0a6bf.gif"
        },

        {
            Title: "Flappy Bird JS",
            Description: `Coded a basic Flappy bird game in Javascript`,
            Github: "https://github.com/rishabh1244/Flappy-Bird-Js",
            Display: " https://sweezy-cursors.com/wp-content/uploads/cursor/flappy-bird-animated/flappy-bird-animated-custom-cursor.gif "
        },

    ];

    return (
        <section className={styles.skillsSection}>
            <Link to="/" className={styles.homeButton}>HOME</Link>
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
        </section>
    );
}

export default Skills;

