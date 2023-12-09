import { HeroDescriptionDemoButton, HeroDescriptionContentDiv, HeroDescriptionDiv, HeroDescriptionTitleDiv } from "@/components/HeroBanner/HeroInfo/HeroDescription/styles";



function HeroDescription() {
    return (
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
    )
}


export default HeroDescription;