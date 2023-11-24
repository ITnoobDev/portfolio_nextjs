import classes from "./skills.module.css";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

export default function SkillsPage() {
    const skills = [
        {
            id: "1",
            title: "Laravel",
            percent: "95%",
        },
        {
            id: "2",
            title: "Next.js",
            percent: "75%",
        },
        {
            id: "3",
            title: "Node.js",
            percent: "80%",
        },
        {
            id: "4",
            title: "Express.js",
            percent: "85%",
        },
    ];

    return (
        <section className={classes.section} id="skills">
            <div className="container">
                <Fade direction="left" delay="0" duration="1500">
                    <div className={classes.skills}>
                        <div className={classes.left}>
                            <h3>
                                I have high skills in developing and programming
                            </h3>
                            <div className={classes.text}>
                                <p>
                                    I am working on a professional, visually
                                    sophisticated and technologically
                                    proficient, responsive and multi-functional
                                    personal portfolio template Shane.
                                </p>
                            </div>
                        </div>
                        <div className={classes.left}>
                            <div className={classes.progress}>
                                <ul>
                                    {skills.map((skill) => (
                                        <li key={skill.id}>
                                            <div className={classes.item}>
                                                <span>
                                                    <span
                                                        className={
                                                            classes.label
                                                        }
                                                    >
                                                        {skill.title}
                                                    </span>
                                                    <span
                                                        className={
                                                            classes.number
                                                        }
                                                    >
                                                        {skill.percent}
                                                    </span>
                                                </span>
                                                <div
                                                    className={
                                                        classes.background
                                                    }
                                                >
                                                    <div
                                                        className={classes.bar}
                                                    >
                                                        <div
                                                            className={
                                                                classes.line
                                                            }
                                                            style={{
                                                                width: skill.percent,
                                                            }}
                                                        ></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </Fade>
            </div>
        </section>
    );
}
