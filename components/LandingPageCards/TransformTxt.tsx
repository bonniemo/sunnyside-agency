import Link from "next/link";

const TransformTxt = () => {
    return (
        <section className="flex flex-col items-center justify-center px-s text-center h-full">
            <h2 className="text-h2-small font-fraunces font-bold">
                Transform your <span className="block">brand</span>
            </h2>
            <p className="mt-xs text-dark-grayish-blue lg:max-w-[80%] 2xl:max-w-[50%]">
                We are a full-service creative agency specializing in helping
                brands grow fast. Engage your clients through compelling visuals
                that do most of the marketing for you.
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

export default TransformTxt;
