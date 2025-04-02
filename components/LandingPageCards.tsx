import Image from "next/image";
import graphicDesignDesktop from "../public/desktop/image-graphic-design.jpg";
import photographyDesktop from "../public/desktop/image-photography.jpg";
import standOutDesktop from "../public/desktop/image-stand-out.jpg";
import transformDesktop from "../public/desktop/image-transform.jpg";
import graphicDesign from "../public/mobile/image-graphic-design.jpg";
import photography from "../public/mobile/image-photography.jpg";
import standOut from "../public/mobile/image-stand-out.jpg";
import transform from "../public/mobile/image-transform.jpg";

const LandingPageCards = () => {
    return (
        <article className="grid grid-cols-1">
            {/* Transform Section */}
            <picture className="">
                <source
                    media="(min-width: 375px)"
                    srcSet={transformDesktop.src}
                />
                <Image
                    src={transform}
                    alt="bright blue background with an orange slice at the bottom"
                    priority
                    className="w-full object-cover"
                    width={transform.width}
                    height={transform.height}
                />
            </picture>

            {/* Stand-Out Section */}
            <picture className="">
                <source
                    media="(min-width: 375px)"
                    srcSet={standOutDesktop.src}
                />
                <Image
                    src={standOut}
                    alt="stand-out image description"
                    priority
                    className="w-full object-cover"
                    width={standOut.width}
                    height={standOut.height}
                />
            </picture>

            {/* Graphic Design Section */}
            <picture className="">
                <source
                    media="(min-width: 375px)"
                    srcSet={graphicDesignDesktop.src}
                />
                <Image
                    src={graphicDesign}
                    alt="graphic design image description"
                    priority
                    className="w-full object-cover"
                    width={graphicDesign.width}
                    height={graphicDesign.height}
                />
            </picture>

            {/* Photography Section */}
            <picture className="">
                <source
                    media="(min-width: 375px)"
                    srcSet={photographyDesktop.src}
                />
                <Image
                    src={photography}
                    alt="photography image description"
                    priority
                    className="w-full object-cover"
                    width={photography.width}
                    height={photography.height}
                />
            </picture>
        </article>
    );
};

export default LandingPageCards;
