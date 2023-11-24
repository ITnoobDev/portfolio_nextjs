import classes from "./portfolio.module.css";
import Image from "next/image";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";

export default function PortfolioPage() {
    const portfolio = [
        {
            id: "1",
            title: "Laspezia",
            path: "https://itnoobdev.github.io/laspezia/",
            img: "/img/portfolio/portfolio1.webp",
            base: "HTML - CSS - JS - jQuery",
        },
        {
            id: "2",
            title: "Unityassetsbox",
            path: "https://unityassetsbox.com/",
            img: "/img/portfolio/portfolio2.webp",
            base: "Laravel - JS - jQuery",
        },
        {
            id: "3",
            title: "Gfx3dfree",
            path: "https://gfx3dfree.com/",
            img: "/img/portfolio/portfolio3.webp",
            base: "Laravel - JS - jQuery",
        },
        {
            id: "4",
            title: "Unrealassetsfree",
            path: "https://unrealassetsfree.top/",
            img: "/img/portfolio/portfolio4.webp",
            base: "Laravel - JS - jQuery",
        },
        {
            id: "5",
            title: "Unrealassetsfree",
            path: "https://unrealassetsfree.top/",
            img: "/img/portfolio/portfolio5.webp",
            base: "Laravel - JS - jQuery",
        },
        {
            id: "6",
            title: "Unrealassetsfree",
            path: "https://unrealassetsfree.top/",
            img: "/img/portfolio/portfolio6.webp",
            base: "Laravel - JS - jQuery",
        },
    ];

    return (
        <section className={classes.section} id="portfolio">
            <div className="container">
                <div className={classes.portfolio}>
                    <div className={classes.title}>
                        <div className={classes.left}>
                            <span>Portfolio</span>
                            <h3>Creative Portfolio</h3>
                        </div>
                    </div>
                    <div className={classes.list}>
                        <ul>
                            <Fade direction="left" delay="0" duration="1500">
                                {portfolio.map((item) => (
                                    <li key={item.id}>
                                        <Link href={item.path} target="_blank">
                                            <div className={classes.item}>
                                                <Image
                                                    src={item.img}
                                                    width={600}
                                                    height={338}
                                                    alt={item.title}
                                                />
                                                <div className={classes.mask}>
                                                    <h2>{item.title}</h2>
                                                    <span>{item.base}</span>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                ))}
                            </Fade>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
