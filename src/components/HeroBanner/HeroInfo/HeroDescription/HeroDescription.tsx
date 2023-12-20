import * as $ from "@/components/HeroBanner/HeroInfo/HeroDescription/styles";

const demoLink = "https://universe.viewsonic.io/demo";

function HeroDescription() {

    const handleDemoButtonClick = () => {
        window.open(demoLink, '_blank');
    };

    return (
        <$.HeroDescriptionDiv>
            <$.HeroDescriptionTitleDiv>
                Your Virtual Campus for Online Learning
            </$.HeroDescriptionTitleDiv>
            <$.HeroDescriptionContentDiv>
                Bring the benefits of in-person learning to an online environment.
            </$.HeroDescriptionContentDiv>
            <$.HeroDescriptionContentDiv>
                Explore virtual learning spaces, engage with the class through customizable avatars and collaborate online as if it were in-person.
            </$.HeroDescriptionContentDiv>
            <$.HeroDescriptionDemoButton onClick={handleDemoButtonClick}>
                SCHEDULE A DEMO
            </$.HeroDescriptionDemoButton>
        </$.HeroDescriptionDiv>
    )
}

export default HeroDescription;