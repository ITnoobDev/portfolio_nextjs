import classes from "./contact.module.css";
import Iframe from "react-iframe";
import { useRef } from "react";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaShareAlt } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";

export default function ContactPage() {
    const nameInputRef = useRef();
    const emailInputRef = useRef();
    const messageInputRef = useRef();

    function submitHandler(event) {
        event.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredEmail = nameInputRef.current.value;
        const enteredMessage = nameInputRef.current.value;

        const userData = {
            name: enteredName,
            email: enteredEmail,
            message: enteredMessage,
        };

        fetch(
            "https://portfolio-nextjs-7500e-default-rtdb.firebaseio.com//orders.json",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: JSON.stringify(userData),
            }
        )
            .then(() => alert("Message sent!"))
            .catch((error) => alert(error));
    }
    return (
        <section className={classes.section} id="contact">
            <div className="container">
                <div className={classes.contact}>
                    <h3>Get in touch</h3>
                    <Fade direction="up" delay="0" duration="1500">
                        <div className={classes.address}>
                            <div className={classes.left}>
                                <form onSubmit={submitHandler}>
                                    <ul>
                                        <li>
                                            <input
                                                name="name"
                                                type="text"
                                                placeholder="Name"
                                                ref={nameInputRef}
                                                required
                                            ></input>
                                        </li>
                                        <li>
                                            <input
                                                name="email"
                                                type="text"
                                                placeholder="Email"
                                                ref={emailInputRef}
                                                required
                                            ></input>
                                        </li>
                                        <li>
                                            <textarea
                                                name="subject"
                                                placeholder="Message"
                                                ref={messageInputRef}
                                                required
                                            ></textarea>
                                        </li>
                                    </ul>
                                    <button className={classes.btn}>
                                        Send Message
                                    </button>
                                </form>
                            </div>
                            <div className={classes.right}>
                                <div className={classes.map}>
                                    <Iframe
                                        width="640px"
                                        height="400px"
                                        title="map"
                                        display="block"
                                        position="relative"
                                        style={{ filter: "opacity(0.7)" }}
                                        src="https://www.google.com/maps/embed/v1/place?q=cyprus&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                                    />
                                </div>
                            </div>
                        </div>
                    </Fade>
                    <Fade direction="up" delay="0" duration="1500">
                        <div className={classes.info}>
                            <div className={classes.box}>
                                <FaMapLocationDot color="white" size={30} />
                                <span>Vas, Sofias 2. Nicosia 2365, Cyprus</span>
                            </div>
                            <div className={classes.box}>
                                <FaPhoneVolume color="white" size={30} />
                                <span>123-456-7890</span>
                            </div>
                        </div>
                    </Fade>
                </div>
            </div>
        </section>
    );
}
