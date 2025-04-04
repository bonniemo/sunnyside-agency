import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import LandingPageCards from "@/components/LandingPageCards/LandingPageCards";
import Testimonials from "@/components/Testimonials";

const Home = () => {
    return (
        <>
            <Hero />
            <LandingPageCards />
            <Testimonials />
            <Gallery />
        </>
    );
};

export default Home;
