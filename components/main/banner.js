import classes from "./banner.module.css";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

export default function BannerPage() {
    return (
        <section className={classes.section} id="banner">
            <div className={classes.banner}>
                <Image
                    src="/img/banner.webp"
                    width={1920}
                    height={650}
                    alt="Banner Image"
                />
            </div>
        </section>
    );
}
