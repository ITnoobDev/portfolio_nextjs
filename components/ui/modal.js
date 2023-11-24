import classes from "./modal.module.css";
import { useRef } from "react";
import { FaMapLocationDot } from "react-icons/fa6";

export default function Modal(props) {
    function cancelHandler() {
        props.onCancel();
    }

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
        <div className={classes.modal}>
            <div className={classes.contact}>
                <button className={classes.closeBtn} onClick={cancelHandler}>
                    <div className={classes.bar1}></div>
                    <div className={classes.bar2}></div>
                </button>
                <h3>Get in touch</h3>
                <div className={classes.address}>
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
                        <button className={classes.btn}>Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
