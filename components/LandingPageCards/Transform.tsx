import Image from "next/image";
import transformDesktop from "../../public/desktop/image-transform.jpg";
import transform from "../../public/mobile/image-transform.jpg";

const Transform = () => {
    return (
        <picture>
            <source media="(min-width: 375px)" srcSet={transformDesktop.src} />
            <Image
                src={transform}
                alt="bright blue background with an orange slice at the bottom"
                priority
                className="w-full object-cover"
                width={transform.width}
                height={transform.height}
            />
        </picture>
    );
};

export default Transform;
