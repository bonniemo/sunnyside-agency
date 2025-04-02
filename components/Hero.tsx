import Image from "next/image";
import heroImageDesktop from "../public/desktop/image-header.jpg";
import heroImageMobile from "../public/mobile/image-header.jpg";

const Hero = () => {
    return (
        <article className="grid grid-cols-1 place-items-center m-0">
            <picture className="col-start-1 row-start-1">
                <source
                    media="(min-width: 375px)"
                    srcSet={heroImageDesktop.src}
                />
                <Image
                    src={heroImageMobile}
                    alt="bright blue background with an orange slice at the bottom"
                    priority
                    className="w-full object-cover"
                    width={heroImageMobile.width}
                    height={heroImageMobile.height}
                />
            </picture>
            <div className="col-start-1 row-start-1 z-50">
                <h1 className="text-white font-fraunces text-h1-small tracking-widest uppercase font-black text-center">
                    We are <span className="block">creatives</span>
                </h1>
                <img
                    src="/icons/icon-arrow-down.svg"
                    alt="arrow ponting down"
                    className="mx-auto my-m"
                />
            </div>
        </article>
    );
};

export default Hero;
