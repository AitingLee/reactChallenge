import { HeroDiv, HeroLeftButton, HeroLeftContent, HeroLeftDiv, HeroLeftTitle, HeroRightDiv, HeroRightVideoDefault } from "@components/HeroBanner/style";



function HeroBanner() {
    return (
        <HeroDiv>
            <HeroLeftDiv>
                <HeroLeftTitle>Your Virtual Campus for Online Learning</HeroLeftTitle>
                <HeroLeftContent>
                    Bring the benefits of in-person learning to an online environment. 
                </HeroLeftContent>
                <HeroLeftContent>
                    Explore virtual learning spaces, engage with the class through customizable avatars and collaborate online as if it were in-person.
                </HeroLeftContent>
                <HeroLeftButton>SCHEDULE A DEMO</HeroLeftButton>
            </HeroLeftDiv>
            <HeroRightDiv>
                <HeroRightVideoDefault/>
            </HeroRightDiv>
        </HeroDiv>
    )
}


export default HeroBanner;