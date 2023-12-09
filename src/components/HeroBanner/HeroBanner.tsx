import { HeroBannerDiv, HeroInfoDiv, HeroDescriptionDemoButton, HeroDescriptionContentDiv, HeroDescriptionDiv, HeroDescriptionTitleDiv, HeroAvatarDiv, HeroMediaDiv, HeroMediaPlayButton, HeroMediaPlayArrowDiv, HeroMediaDefaultDiv } from "@components/HeroBanner/style";



function HeroBanner() {
    return (
        <HeroBannerDiv>
            <HeroInfoDiv>
                <HeroDescriptionDiv>
                    <HeroDescriptionTitleDiv>Your Virtual Campus for Online Learning</HeroDescriptionTitleDiv>
                    <HeroDescriptionContentDiv>
                        Bring the benefits of in-person learning to an online environment.
                    </HeroDescriptionContentDiv>
                    <HeroDescriptionContentDiv>
                        Explore virtual learning spaces, engage with the class through customizable avatars and collaborate online as if it were in-person.
                    </HeroDescriptionContentDiv>
                    <HeroDescriptionDemoButton>SCHEDULE A DEMO</HeroDescriptionDemoButton>
                </HeroDescriptionDiv>
                <HeroMediaDiv>

                    <HeroMediaDefaultDiv>
                        <HeroMediaPlayButton >
                            <HeroMediaPlayArrowDiv />
                        </HeroMediaPlayButton>

                    </HeroMediaDefaultDiv>


                </HeroMediaDiv>
            </HeroInfoDiv>
            <HeroAvatarDiv></HeroAvatarDiv>
        </HeroBannerDiv>
    )
}


export default HeroBanner;