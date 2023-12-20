import * as $ from "@/components/HeroBanner/HeroInfo/HeroMedia/styles";
import { useState } from "react";
import ReactPlayer from 'react-player'

function HeroMedia() {

    const [playing, setPlaying] = useState(false);

    return (
        <$.HeroMediaDiv>
            {playing ?
                <$.HeroMediaVideoMask>
                    <$.HeroMediaVideoPlayer url='https://youtu.be/rAVeLbU_D7U?si=M6sklz_0SQ6zCBFv'
                        playing={playing} onEnded={() => setPlaying(false)} />
                </$.HeroMediaVideoMask> :
                <$.HeroMediaDefaultDiv>
                    <$.HeroMediaPlayButton onClick={() => setPlaying(true)}>
                        <$.HeroMediaPlayArrowDiv />
                    </$.HeroMediaPlayButton>
                </$.HeroMediaDefaultDiv>
            }
        </$.HeroMediaDiv>
    )
}

export default HeroMedia;