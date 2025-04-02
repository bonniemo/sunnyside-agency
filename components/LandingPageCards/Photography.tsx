import Image from "next/image";
import photographyDesktop from "../../public/desktop/image-photography.jpg";
import photography from "../../public/mobile/image-photography.jpg";

const Photography = () => {
    return (
        <section className="grid grid-cols-1 items-end">
            <picture className="col-start-1 row-start-1">
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
            <div className="text-dark-blue py-l px-s col-start-1 row-start-1 text-center">
                <h3 className="text-h3-small ">Photography</h3>
                <p>
                    Great design makes you memorable. We deliver artwork that
                    underscores your brand message and captures potential
                    clients’ attention.
                </p>
            </div>
        </section>
    );
};

export default Photography;
