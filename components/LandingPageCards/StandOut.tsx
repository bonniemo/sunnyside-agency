import Image from "next/image";
import standOutDesktop from "../../public/desktop/image-stand-out.jpg";
import standOut from "../../public/mobile/image-stand-out.jpg";

const StandOut = () => {
    return (
        <picture>
            <source media="(min-width: 375px)" srcSet={standOutDesktop.src} />
            <Image
                src={standOut}
                alt="stand-out image description"
                priority
                className="w-full object-cover"
                width={standOut.width}
                height={standOut.height}
            />
        </picture>
    );
};

export default StandOut;
