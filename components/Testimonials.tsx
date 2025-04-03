import Image from "next/image";
import { testimonials } from "./testimonialsData";

const Testimonials = () => {
    return (
        <section className="text-center py-section px-xs sm:py-largest sm:px-section">
            <h4 className="text-center text-h4-small text-very-dark-desaturated-blue mb-m">
                Client testimonials
            </h4>
            <div className="flex flex-col sm:flex-row items-center gap-12">
                {testimonials.map((testimonial) => (
                    <div
                        key={testimonial.id}
                        className="flex flex-col items-center"
                    >
                        <Image
                            src={testimonial.avatar}
                            alt={testimonial.alt}
                            priority
                            width={testimonial.avatar.width}
                            height={testimonial.avatar.height}
                            className="rounded-full"
                        />
                        <p className="text-base text-very-dark-grayish-blue mt-s">
                            {testimonial.text}
                        </p>
                        <div className="text-base text-very-dark-desaturated-blue mt-s">
                            {testimonial.name}
                        </div>
                        <div className="text-grayish-blue mt-3">
                            {testimonial.title}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
