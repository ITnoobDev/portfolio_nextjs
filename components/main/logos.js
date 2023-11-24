import classes from "./logos.module.css";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Fade } from "react-awesome-reveal";

export default function LogosPage() {
    const logos = [
        {
            id: "1",
            title: "Laravel",
            url: "/img/slider1.webp",
        },
        {
            id: "2",
            title: "Laravel",
            url: "/img/slider2.webp",
        },
        {
            id: "3",
            title: "Laravel",
            url: "/img/slider3.webp",
        },
        {
            id: "4",
            title: "Laravel",
            url: "/img/slider4.webp",
        },
        {
            id: "5",
            title: "Laravel",
            url: "/img/slider5.webp",
        },
        {
            id: "6",
            title: "Laravel",
            url: "/img/slider6.webp",
        },
    ];

    const settings = {
        autoplay: true,
        autoplaySpeed: 2000,
        dots: false,
        infinite: true,
        speed: 2500,
        slidesToShow: 4,
        slidesToScroll: 1,
        pauseOnHover: false,
        arrows: false,
        centerMode: false,
    };

    return (
        <section className={classes.section} id="logos">
            <div className="container">
                <Fade delay="0" duration="1500">
                    <Slider {...settings}>
                        {logos.map((item) => (
                            <div className={classes.item} key={item.id}>
                                <Image
                                    src={item.url}
                                    width={200}
                                    height={95}
                                    alt={item.title}
                                />
                            </div>
                        ))}
                    </Slider>
                </Fade>
            </div>
        </section>
    );
}
