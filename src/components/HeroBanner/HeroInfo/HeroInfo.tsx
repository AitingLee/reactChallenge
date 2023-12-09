import { HeroInfoDiv } from "@/components/HeroBanner/HeroInfo/styles";
import HeroDescription from "@/components/HeroBanner/HeroInfo/HeroDescription/HeroDescription";
import HeroMedia from "@/components/HeroBanner/HeroInfo/HeroMedia/HeroMedia";

function HeroInfo() {
    return (
        <HeroInfoDiv>
            <HeroDescription />
            <HeroMedia />
        </HeroInfoDiv>
    )
}

export default HeroInfo;