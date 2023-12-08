import { HeroUpperDiv, HeroDiv, HeroLeftButton, HeroLeftContent, HeroLeftDiv, HeroLeftTitle, HeroRightAvatar, HeroRightDiv, HeroRightVideoButton, HeroRightVideoButtonArrow, HeroRightVideoDefault } from "@components/HeroBanner/style";



function HeroBanner() {
    return (
        <HeroUpperDiv>
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

                    <HeroRightVideoDefault>
                        <HeroRightVideoButton >
                            <HeroRightVideoButtonArrow />
                        </HeroRightVideoButton>

                    </HeroRightVideoDefault>


                </HeroRightDiv>
            </HeroDiv>
            <HeroRightAvatar></HeroRightAvatar>
        </HeroUpperDiv>
    )
}


export default HeroBanner;