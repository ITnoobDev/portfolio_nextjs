import { Link } from "react-scroll";
import classes from "./header.module.css";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function Header() {
    const menu = [
        { title: "Home", path: "home" },
        { title: "About", path: "about" },
        { title: "Portfolio", path: "portfolio" },
        { title: "Contact", path: "contact" },
    ];

    const [show, setShow] = useState(false);

    const controlNavbar = () => {
        if (window.scrollY > 50) {
            setShow(true);
        } else {
            setShow(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", controlNavbar);
        return () => {
            window.removeEventListener("scroll", controlNavbar);
        };
    }, []);

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen((open) => !open);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <>
            <header className={`${classes.header} ${show && classes.down}`}>
                <div className={classes.header__inner}>
                    <Link to="home">
                        <div className={classes.logo}>
                            <Image
                                src="/img/sitelogo.png"
                                width={64}
                                height={64}
                                alt="Site Logo"
                            />
                            <span>SiteCraft</span>
                        </div>
                    </Link>

                    <div className={classes.menu}>
                        <ul>
                            {menu.map((menu) => (
                                <li key={menu.title} className={classes.link}>
                                    <Link
                                        activeClass={classes.activeNav}
                                        to={menu.path}
                                        spy={true}
                                        smooth={true}
                                        offset={-50}
                                        duration={500}
                                        onSetActive={closeMenu}
                                    >
                                        {menu.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <button className={classes.menuBtn} onClick={toggleMenu}>
                        <div
                            className={`${classes.bar1} ${
                                isOpen ? classes.change : ""
                            }`}
                        ></div>
                        <div
                            className={`${classes.bar2} ${
                                isOpen ? classes.change : ""
                            }`}
                        ></div>
                        <div
                            className={`${classes.bar3} ${
                                isOpen ? classes.change : ""
                            }`}
                        ></div>
                    </button>
                </div>
                <div
                    className={`${classes.mobileMenu} ${
                        isOpen ? classes.active : ""
                    }`}
                >
                    <ul>
                        {menu.map((menu) => (
                            <li key={menu.title} className={classes.mobileLink}>
                                <Link
                                    activeClass={classes.activeMobile}
                                    to={menu.path}
                                    spy={true}
                                    smooth={true}
                                    offset={-50}
                                    duration={500}
                                >
                                    {menu.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </header>
        </>
    );
}
