import { HeroMediaPlayArrowDiv, HeroMediaPlayButton, HeroMediaDefaultDiv, HeroMediaDiv } from "@/components/HeroBanner/HeroInfo/HeroMedia/styles";


function HeroMedia() {
    return (
        <HeroMediaDiv>
            <HeroMediaDefaultDiv>
                <HeroMediaPlayButton >
                    <HeroMediaPlayArrowDiv />
                </HeroMediaPlayButton>
            </HeroMediaDefaultDiv>
        </HeroMediaDiv>
    )
}


export default HeroMedia;