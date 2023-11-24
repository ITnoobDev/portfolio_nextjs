import classes from "./testimonials.module.css";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Fade } from "react-awesome-reveal";

export default function TestimonialsPage() {
    const testimonials = [
        {
            id: "1",
            name: "Alfred Summer",
            text: "Vlad Pokrovski is an exceptional web developer. I had the pleasure of working with him on a project and his skills surpassed my expectations. His attention to detail and ability to bring complex ideas to life is truly impressive.",
            career: "programmer",
            url: "/img/test1.jpg",
        },
        {
            id: "2",
            name: "Andrea Rui",
            text: "I had the pleasure of working with Vlad Pokrovski on a web development project and I must say, he exceeded my expectations. Vlad's expertise in web development is truly impressive.",
            career: "web designer",
            url: "/img/test2.jpg",
        },
        {
            id: "3",
            name: "Eddie Buster",
            text: "Vlad Pokrovski is an exceptional web developer that I have had the pleasure of working with. His technical expertise and attention to detail truly set him apart from others in the industry.istently exceeded my expectations.",
            career: "SEO",
            url: "/img/test3.jpg",
        },
    ];

    const settings = {
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false,
        arrows: false,
    };

    return (
        <section className={classes.section} id="about">
            <div className="container">
                <Fade direction="left" delay="0" duration="1500">
                    <div className={classes.about}>
                        <div className={classes.left}>
                            <span>Testimonials</span>
                            <h3>
                                What clients say about my portfolio template
                            </h3>
                        </div>

                        <div className={classes.right}>
                            <Slider {...settings}>
                                {testimonials.map((item) => (
                                    <div className={classes.item} key={item.id}>
                                        <div className={classes.text}>
                                            <p>{item.text}</p>
                                        </div>
                                        <div className={classes.author}>
                                            <Fade direction="right">
                                                <Image
                                                    src={item.url}
                                                    width={75}
                                                    height={75}
                                                    alt={item.name}
                                                />
                                            </Fade>
                                            <Fade direction="up">
                                                <div className={classes.name}>
                                                    <h3>{item.name}</h3>
                                                    <span>{item.career}</span>
                                                </div>
                                            </Fade>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </Fade>
            </div>
        </section>
    );
}
