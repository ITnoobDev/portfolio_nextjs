import classes from "./about.module.css";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

export default function AboutPage() {
    return (
        <section className={classes.section} id="about">
            <div className="container">
                <div className={classes.about}>
                    <div className={classes.left}>
                        <Fade direction="up" delay="0" duration="1500">
                            <Image
                                src="/img/aboutpicture.webp"
                                width={500}
                                height={393}
                                alt="Man Image"
                            />
                        </Fade>
                    </div>

                    <div className={classes.right}>
                        <Fade direction="up" delay="0" duration="1500">
                            <span>About me</span>
                            <h3>
                                Creative Independent Web Developer based on
                                Earth
                            </h3>
                        </Fade>
                        <div className={classes.text}>
                            <Fade direction="up" delay="0" duration="1500">
                                <p>
                                    My name is Vlad, and I am a full-stack Web
                                    developer with experience in designing and
                                    developing custom websites and web
                                    applications. I specialize in creating sites
                                    with HTML, CSS, JavaScript, and various
                                    frameworks such as Bootstrap, Laravel,
                                    React, Next.js and more. I have experience
                                    with server-side technologies such as
                                    Node.js, Express, MongoDB, and MySQL. I am
                                    also familiar with version control systems
                                    such as Git, as well as content management
                                    systems such as WordPress.
                                </p>
                            </Fade>
                        </div>
                        <Fade direction="up" delay="0" duration="1500">
                            <button className={classes.btn}>Download CV</button>
                        </Fade>
                    </div>
                </div>
            </div>
        </section>
    );
}
