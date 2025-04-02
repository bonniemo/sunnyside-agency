import Link from "next/link";

const StandOutTxt = () => {
    return (
        <section className="py-l px-s text-center">
            <h2 className="text-h2-small font-fraunces font-bold">
                Stand out to the <span className="block">right audience</span>
            </h2>
            <p className="mt-xs text-dark-grayish-blue">
                Using a collaborative formula of designers, researchers,
                photographers, videographers, and copywriters, we’ll build and
                extend your brand in digital places.
            </p>
            <Link
                className="text-small text-very-dark-grayish-blue uppercase mt-s"
                href="#"
            >
                Learn More
            </Link>
        </section>
    );
};

export default StandOutTxt;
