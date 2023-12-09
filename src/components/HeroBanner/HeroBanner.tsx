import { HeroBannerDiv, HeroAvatarDiv } from "@/components/HeroBanner/styles";
import HeroInfo from "@/components/HeroBanner/HeroInfo/HeroInfo";

function HeroBanner() {
    return (
        <HeroBannerDiv>
            <HeroInfo />
            <HeroAvatarDiv />
        </HeroBannerDiv>
    )
}

export default HeroBanner;