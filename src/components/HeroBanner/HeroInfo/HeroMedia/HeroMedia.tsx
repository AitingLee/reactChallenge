import * as $ from "@/components/HeroBanner/HeroInfo/HeroMedia/styles";
import { useState } from "react";
import ReactPlayer from 'react-player'

function HeroMedia() {

    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <$.HeroMediaDiv>
            {isPlaying ?
                <$.HeroMediaVideoMask>
                    <$.HeroMediaVideoPlayer url='https://youtu.be/rAVeLbU_D7U?si=M6sklz_0SQ6zCBFv'
                        playing={isPlaying} onEnded={() => setIsPlaying(false)} />
                </$.HeroMediaVideoMask> :
                <$.HeroMediaDefaultDiv>
                    <$.HeroMediaPlayButton onClick={() => setIsPlaying(true)}>
                        <$.HeroMediaPlayArrowDiv />
                    </$.HeroMediaPlayButton>
                </$.HeroMediaDefaultDiv>
            }
        </$.HeroMediaDiv>
    )
}

export default HeroMedia;