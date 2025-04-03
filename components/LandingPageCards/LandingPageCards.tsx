import GraphicDesign from "./GraphicDesign";
import Photography from "./Photography";
import StandOut from "./StandOut";
import StandOutTxt from "./StandOutTxt";
import Transform from "./Transform";
import TransformTxt from "./TransformTxt";

const LandingPageCards = () => {
    return (
        <article className="grid grid-cols-1 sm:grid-cols-2">
            <div className="order-1 sm:order-2">
                <Transform />
            </div>
            <div className="order-2 sm:order-1">
                <TransformTxt />
            </div>
            <div className="order-3 sm:order-3">
                <StandOut />
            </div>
            <div className="order-4 sm:order-4">
                <StandOutTxt />
            </div>
            <div className="order-5 sm:order-5">
                <GraphicDesign />
            </div>
            <div className="order-6 sm:order-6">
                <Photography />
            </div>
        </article>
    );
};

export default LandingPageCards;
