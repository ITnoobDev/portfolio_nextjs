import AboutPage from "@/components/main/about";
import BannerPage from "@/components/main/banner";
import ContactPage from "@/components/main/contact";
import LogosPage from "@/components/main/logos";
import PortfolioPage from "@/components/main/portfolio";
import SkillsPage from "@/components/main/skills";
import TestimonialsPage from "@/components/main/testimonials";
import TopPage from "@/components/main/top-page";
import Head from "next/head";

export default function HomePage() {
    return (
        <>
            <Head>
                <title>SiteCraft</title>
            </Head>
            <TopPage />
            <AboutPage />
            <PortfolioPage />
            <SkillsPage />
            <BannerPage />
            <LogosPage />
            <TestimonialsPage />
            <ContactPage />
        </>
    );
}
