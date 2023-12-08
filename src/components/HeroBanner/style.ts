import styled from 'styled-components'
import heroImageLaptop from '@assets/bg-herosession-laptop.png';
import heroImageMobile from '@assets/bg-herosession-mobile.png';
import videoImageLaptop from '@assets/img-videodefault-laptop.png';
import videoImageMobile from '@assets/img-videodefault-mobile.png';

import videoButtonDefaultLaptop from '@assets/Btn-default.png';
import videoButtonHoverLaptop from '@assets/Btn-hover.png';

const HeroDiv = styled.div`
    background-image: url(${heroImageLaptop});
    width: 100vw;
    height: 50.76vw;
    background-position: center;
    background-repeat: no-repeat;
    background-size:cover;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: stretch;
    justify-content: space-evenly;
    @media (max-width: 680px) {
        background-image: url(${heroImageMobile});
        flex-direction: column;
        height: 176vw;
        background-size:contain;
        background-position: top;
    }
`;


const HeroLeftDiv = styled.div`
    box-sizing: border-box;
    width: 41.45%;
    display: flex;
    flex-direction: column;
    gap: 1.5em;
    justify-content: flex-start;
    margin: 10.76vw 0 0 78px;
    @media (max-width: 1024px) {
        justify-content: center;
        margin: 0 0 0 78px;
        gap: 1em;
    }
    @media (max-width: 680px) {
        width: auto;
        align-items: center;
        justify-content: flex-start;
        margin: 32.8vw 15vw 0 15vw;
        height: 109.6vw;
        gap: 0;
    }
    @media (max-width: 355px) {
        margin: 25vw 15vw 0 15vw;
    }
`;

const HeroLeftTitle = styled.div`
    font-size:60px;
    font-weight: 700;
    width: 80%;
    word-wrap: break-word;
    line-height: 1;
    @media (max-width: 1680px) {
        font-size: 52px;
    }
    @media (max-width: 1440px) {
        font-size: 48px;
    }
    @media (max-width: 1280px) {
        font-size: 36px;
    }
    @media (max-width: 1024px) {
        font-size: 32px;
    }
    @media (max-width: 768px) {
        font-size: 30px;
    }
    @media (max-width: 680px) {
        width: 100%;
        text-align: center;
        margin-bottom: 18px;
    }
    @media (max-width: 480px) {
        font-size: 27px;
    }
`;

const HeroLeftContent = styled.div`
    font-size: 32px;
    font-weight: 400;
    word-wrap: break-word;
    @media (max-width: 1680px) {
        font-size: 26px;
    }
    @media (max-width: 1440px) {
        font-size: 23px;
    }
    @media (max-width: 1280px) {
        font-size: 20px;
    }
    @media (max-width: 1024px) {
        font-size: 16px;
    }
    @media (max-width: 768px) {
        font-size: 14px;
    }
    @media (max-width: 680px) {
        width: 96%;
        text-align: center;
    }
    @media (max-width: 480px) {
        font-size: 12px;
    }
`;

const HeroLeftButton = styled.button`
    padding: 6px 16px 6px 16px;
    background: linear-gradient(152deg, #F7DC16 0%, #F7DC16 0%, #FF2A2D 100%);
    border-radius: 26pt;
    font-weight: 700;
    border-width: 0;
    height: 47px;
    width: 268px;
    flex-shrink: 1;
    @media (max-width: 680px) {
        margin: 12vw 0 0 0;
        height: 36px;
        width: 206px;
    }
    @media (max-width: 355px) {
        margin: 6vw 0 0 0;
    }
`;

const HeroRightDiv = styled.div`
    box-sizing: border-box;
    flex-grow: 1;
    display: grid;
    grid-template-columns: auto 27px;
    grid-template-rows: auto 21.88%;
    margin: 120px 51px 0 20px;
    
    @media (max-width: 680px) {
        width: 100%;
        height: 50%;
        margin:0 ;
        display: flex;
        justify-content: center;
        align-items: flex-end;
    }
`;

const HeroRightVideoDefault = styled.div`
    aspect-ratio: calc(669/452);
    background-image: url(${videoImageLaptop});
    background-position: center;
    background-repeat: no-repeat;
    background-size:cover;

    grid-column: 1;
    grid-row: 1;

    @media (max-width: 680px) {
        width: 93.6vw;
        src: url(${videoImageMobile});
    }
`;

const HeroRightVideoButton = styled.div`
    aspect-ratio: calc(669/452);
    background-image: url(${videoImageLaptop});
    background-position: center;
    background-repeat: no-repeat;
    background-size:cover;

    grid-column: 1;
    grid-row: 1;

    @media (max-width: 680px) {
        width: 93.6vw;
        src: url(${videoImageMobile});
    }
`;

export { HeroDiv, HeroLeftDiv, HeroLeftTitle, HeroLeftContent, HeroLeftButton, HeroRightDiv, HeroRightVideoDefault};