import classes from "./footer.module.css";
import Link from "next/link";
import ScrollToTop from "react-scroll-up";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className={classes.footer}>
            <div className="container">
                <div className={classes.info}>
                    <div className={classes.about}>
                        <div className={classes.title}>About</div>
                        <div className={classes.text}>
                            <p>
                                SiteCraft is an innovative web development and
                                digital marketing agency that provides
                                comprehensive solutions to businesses of all
                                sizes. Our services are tailored to meet the
                                needs of our clients and ensure that their
                                websites are user-friendly, visually appealing
                                and effective. We provide everything from
                                planning and designing to development and
                                marketing. Our team of experienced web
                                developers and digital marketing experts utilize
                                the latest tools and technologies to create
                                custom websites that are tailored to the
                                specific requirements of each client. Our
                                creative approach to web development and digital
                                marketing ensures that our clients get the best
                                results possible. We offer a comprehensive suite
                                of services that include website strategy,
                                design, development, SEO, content creation,
                                social media marketing and more. With SiteCraf,
                                you can trust that you will get an optimized,
                                high-quality website that is designed to engage
                                and convert.
                            </p>
                        </div>
                    </div>
                    <div className={classes.links}>
                        <div className={classes.title}>Useful Links</div>
                        <ul>
                            <li>
                                <Link href="#">About</Link>
                            </li>
                            <li>
                                <Link href="#">FAQ</Link>
                            </li>
                            <li>
                                <Link href="#">Privacy Policy</Link>
                            </li>
                            <li>
                                <Link href="#">Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <div className={classes.links}>
                        <div className={classes.title}>Partners</div>
                        <ul>
                            <li>
                                <Link href="https://gfx3dfree.com/">
                                    Gfx3Dfree
                                </Link>
                            </li>
                            <li>
                                <Link href="https://unityassetsbox.com/">
                                    Unityassetsbox
                                </Link>
                            </li>
                            <li>
                                <Link href="https://unrealassetsfree.top/">
                                    Unrealassetsfree
                                </Link>
                            </li>
                            <li>
                                <Link href="https://assetsfree.top/">
                                    Assetsfree
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={classes.line}></div>
                <div className={classes.copyright}>
                    <div className={classes.text}>
                        &copy; {currentYear} SiteCraft
                    </div>
                    <div className={classes.social}>
                        <ul>
                            <li>
                                <Link href="https://www.facebook.com/">
                                    <FaSquareFacebook size={25} />
                                </Link>
                            </li>
                            <li>
                                <Link href="https://www.instagram.com/">
                                    <FaInstagram size={25} />
                                </Link>
                            </li>
                            <li>
                                <Link href="https://twitter.com/">
                                    <BsTwitterX size={25} />
                                </Link>
                            </li>
                            <li>
                                <Link href="https://youtube.com/">
                                    <FaYoutube size={25} />
                                </Link>
                            </li>
                            <li>
                                <Link href="https://discord.com/">
                                    <FaDiscord size={25} />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <ScrollToTop
                showUnder={160}
                style={{
                    position: "fixed",
                    bottom: 30,
                    right: 30,
                    cursor: "pointer",
                    transitionDuration: "0.2s",
                    transitionTimingFunction: "linear",
                    transitionDelay: "0s",
                }}
            >
                <span>
                    <FaArrowAltCircleUp color="#a33" size={50} />
                </span>
            </ScrollToTop>
        </footer>
    );
}
