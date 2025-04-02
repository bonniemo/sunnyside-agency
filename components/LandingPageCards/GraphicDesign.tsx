import Image from "next/image";
import graphicDesignDesktop from "../../public/desktop/image-graphic-design.jpg";
import graphicDesign from "../../public/mobile/image-graphic-design.jpg";

const GraphicDesign = () => {
    return (
        <section className="grid grid-cols-1 items-end">
            <picture className="col-start-1 row-start-1">
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
            <div className="text-dark-desaturated-cyan py-l px-s col-start-1 row-start-1 text-center">
                <h3 className="text-h3-small ">Graphic design</h3>
                <p>
                    Great design makes you memorable. We deliver artwork that
                    underscores your brand message and captures potential
                    clients’ attention.
                </p>
            </div>
        </section>
    );
};

export default GraphicDesign;
