import styled from 'styled-components'

import avatarImage from '@assets/img-herosession-avatar-mobile.png';
import avatarMask from '@assets/bg-herosession-mask.png';

export const HeroBannerDiv = styled.div`
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto;
`;

export const HeroAvatarDiv = styled.div`
    background-image: url(${avatarImage});
    width: 100vw;
    height: 50.76vw;
    background-position: 79.51vw 9vw;
    background-repeat: no-repeat;
    background-size:17vw 41.67vw;
    -webkit-mask-image: url(${avatarMask});
    -webkit-mask-position: right bottom;
    -webkit-mask-size: contain;
    -webkit-mask-repeat: no-repeat;
    grid-column: 1;
    grid-row: 1;
    pointer-events: none;

    @media (max-width: 680px) {
        -webkit-mask-image: none;
        height: 176vw;
        background-position: 63.73vw 100%;
        background-size:24.8vw 61.33vw;
    }
`;