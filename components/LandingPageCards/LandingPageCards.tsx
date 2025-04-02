import GraphicDesign from "./GraphicDesign";
import Photography from "./Photography";
import StandOut from "./StandOut";
import StandOutTxt from "./StandOutTxt";
import Transform from "./Transform";
import TransformTxt from "./TransformTxt";

const LandingPageCards = () => {
    return (
        <article className="grid grid-cols-1">
            <Transform />
            <TransformTxt />
            <StandOut />
            <StandOutTxt />
            <GraphicDesign />
            <Photography />
        </article>
    );
};

export default LandingPageCards;
