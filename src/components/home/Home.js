import styles from './css/style.module.css';
import Menu from "../menu/Menu.js"
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className={styles.content}>
            <Menu />
            <div className={styles.text}>

                <h1 className={styles.heading}> Hi! I'm Rishabh Kumar </h1>
                <br />
                <p className={styles.text}>
                    18. FullStack Developer
                </p>
                <p className={styles.text2}>
                    Cracked • Autistic • Delusional • Retard
                </p>


                <br />
                <h2 className={styles.subheading}>Hobbies</h2>
                <br />
                <p className={styles.textItem}>
                    Novel's 📖  Video Game's 🎮  Music 🎵🎧
                </p>
                <br />
                <h2 className={styles.subheading}>Current Obsession's</h2>
                <br />
                <p className={styles.textItem}>
                    🤖 AI/ML | 🐧 Linux | 💻 Embedded C | 📐 Math | 🌌 Physics Simulations | 🌐 Web3 | 📚 Novels | 🏛️ History | 🕉️ Spirituality
                </p>

            </div>

            <div className={styles.pic}>
                <img className={styles.image} src="https://pbs.twimg.com/profile_images/1978525820810403840/ZLAIjLeh_400x400.jpg" ></img>
            </div>

            <button className={styles.tech}>

                <Link
                    to="/skills"
                    style={{
                        textDecoration: "none",
                        color: "inherit",
                        outline: "none",
                        border: "none",
                    }}
                    onMouseDown={(e) => e.preventDefault()} // prevents focus highlight
                >
                    tech skill's
                </Link>


            </button>
            {/*
                <div className={styles.quote}>
                <h1>
                    “The ultimate fate of all intelligent beings has always been to become as grand as their thoughts.”
                    <br /><br />—- Cixin Liu
                </h1>
            </div>
            */}

        </div >




    )
}
export default Home;

