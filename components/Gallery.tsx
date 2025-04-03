import Image from "next/image";
import galleryConeDesktop from "../public/desktop/image-gallery-cone.jpg";
import galleryMilkBottlesDesktop from "../public/desktop/image-gallery-milkbottles.jpg";
import galleryOrangeDesktop from "../public/desktop/image-gallery-orange.jpg";
import gallerySugarCubesDesktop from "../public/desktop/image-gallery-sugarcubes.jpg";
import galleryConeMobile from "../public/mobile/image-gallery-cone.jpg";
import galleryMilkBottlesMobile from "../public/mobile/image-gallery-milkbottles.jpg";
import galleryOrangeMobile from "../public/mobile/image-gallery-orange.jpg";
import gallerySugarCubesMobile from "../public/mobile/image-gallery-sugar-cubes.jpg";

const Gallery = () => {
    return (
        <article className="grid grid-cols-2 sm:grid-cols-4">
            {/* Milk Bottles */}
            <picture className="col-span-1">
                <source
                    media="(min-width: 375px)"
                    srcSet={galleryMilkBottlesDesktop.src}
                />
                <Image
                    src={galleryMilkBottlesMobile}
                    alt="Gallery image of milk bottles"
                    priority
                    className="w-full object-cover"
                    width={galleryMilkBottlesMobile.width}
                    height={galleryMilkBottlesMobile.height}
                />
            </picture>

            {/* Orange */}
            <picture className="col-span-1">
                <source
                    media="(min-width: 375px)"
                    srcSet={galleryOrangeDesktop.src}
                />
                <Image
                    src={galleryOrangeMobile}
                    alt="Gallery image of an orange"
                    priority
                    className="w-full object-cover"
                    width={galleryOrangeMobile.width}
                    height={galleryOrangeMobile.height}
                />
            </picture>

            {/* Cone */}
            <picture className="col-span-1">
                <source
                    media="(min-width: 375px)"
                    srcSet={galleryConeDesktop.src}
                />
                <Image
                    src={galleryConeMobile}
                    alt="Gallery image of a cone"
                    priority
                    className="w-full object-cover"
                    width={galleryConeMobile.width}
                    height={galleryConeMobile.height}
                />
            </picture>

            {/* Sugar Cubes */}
            <picture className="col-span-1">
                <source
                    media="(min-width: 375px)"
                    srcSet={gallerySugarCubesDesktop.src}
                />
                <Image
                    src={gallerySugarCubesMobile}
                    alt="Gallery image of sugar cubes"
                    priority
                    className="w-full object-cover"
                    width={gallerySugarCubesMobile.width}
                    height={gallerySugarCubesMobile.height}
                />
            </picture>
        </article>
    );
};

export default Gallery;
