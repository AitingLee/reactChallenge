import styled from 'styled-components'

import videoImageLaptop from '@assets/img-videodefault-laptop.png';
import videoImageMobile from '@assets/img-videodefault-mobile.png';

import videoButtonDefault from '@assets/Btn-default.png';
import videoButtonHover from '@assets/Btn-hover.png';
import videoButtonArrow from '@assets/Btn-arrow.png';

export const HeroMediaDiv = styled.div`
    box-sizing: border-box;
    flex-grow: 1;
    display: grid;
    grid-template-columns: auto 27px;
    grid-template-rows: auto 21.88%;
    margin: 120px 51px 0 20px;
    
    @media (max-width: 680px) {
        margin:0 ;
        grid-template-columns: auto;
        grid-template-rows: auto;
        justify-items:center;
        justify-content: center;
        align-items: center;
        align-content: center;
    }
`;

export const HeroMediaDefaultDiv = styled.div`
    aspect-ratio: calc(669/452);
    background-image: url(${videoImageLaptop});
    background-position: center;
    background-repeat: no-repeat;
    background-size:cover;

    grid-column: 1;
    grid-row: 1;

    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 680px) {
        width: 93.6vw;
        aspect-ratio: calc(351/205);
        background-image: url(${videoImageMobile});
    }
`;

export const HeroMediaPlayButton = styled.button`
    width: 20%;
    aspect-ratio: 1;
    background-image: url(${videoButtonDefault});
    background-position: center;
    background-repeat: no-repeat;
    background-size:cover;
    background-color:transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    border: 0;

    &:hover{
        background-image: url(${videoButtonHover});
        cursor: pointer;
    }
`;

export const HeroMediaPlayArrowDiv = styled.div`
    width: 39.13%;
    aspect-ratio: calc(159/177);
    background-image: url(${videoButtonArrow});
    background-position: center;
    background-repeat: no-repeat;
    background-size:contain;
`;

