import Backdrop from "../ui/backdrop";
import Modal from "../ui/modal";
import classes from "./top-page.module.css";
import Image from "next/image";
import { useState } from "react";

export default function TopPage() {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    function modalHandler() {
        setModalIsOpen(true);
    }

    function closeModalHandler() {
        setModalIsOpen(false);
    }

    return (
        <section className={classes.section} id="home">
            <div className="container">
                <div className={classes.content}>
                    <div className={classes.name}>
                        <h1>Vlad Pokrovski</h1>
                        <h2>Web developer</h2>
                        <p>
                            I'm Vlad Pokrovsky, and I am a web developer with
                            over 3 years of experience. My passion lies in
                            creating websites that are both visually stunning
                            and functionally robust.
                        </p>
                        <span className="overlay_effect"></span>
                        <button className={classes.btn} onClick={modalHandler}>
                            Hire me
                        </button>
                    </div>
                    <div className={classes.image}>
                        <Image
                            src="/img/topman.webp"
                            width={600}
                            height={600}
                            alt="Man Image"
                        />
                    </div>
                </div>
            </div>
            <div className={classes.area}>
                <ul className={classes.circles}>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            {modalIsOpen && <Modal onCancel={closeModalHandler} />}
            {modalIsOpen && <Backdrop onClick={closeModalHandler} />}
        </section>
    );
}
