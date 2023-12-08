import styled from 'styled-components'
import heroImageLaptop from '@assets/bg-herosession-laptop.png';
import heroImageMobile from '@assets/bg-herosession-mobile.png';
import videoImageLaptop from '@assets/img-videodefault-laptop.png';
import videoImageMobile from '@assets/img-videodefault-mobile.png';

import videoButtonDefault from '@assets/Btn-default.png';
import videoButtonHover from '@assets/Btn-hover.png';
import videoButtonArrow from '@assets/Btn-arrow.png';

import avatarImage from '@assets/img-herosession-avatar-mobile.png';
import avatarMask from '@assets/bg-herosession-mask.png';

const HeroUpperDiv = styled.div`
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto;
`;

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
    grid-column: 1;
    grid-row: 1;
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
    border: 0;
    @media (max-width: 680px) {
        margin: 12vw 0 0 0;
        height: 36px;
        width: 206px;
    }
    @media (max-width: 355px) {
        margin: 6vw 0 0 0;
    }

    &:hover{
        background: linear-gradient(152deg, #FF2A2D 8.49%, #F7DC16 92.21%);
        cursor: pointer;
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
        margin:0 ;
        grid-template-columns: auto;
        grid-template-rows: auto;
        justify-items:center;
        justify-content: center;
        align-items: center;
        align-content: center;
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

    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 680px) {
        width: 93.6vw;
        aspect-ratio: calc(351/205);
        background-image: url(${videoImageMobile});
    }
`;

const HeroRightVideoButton = styled.button`
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

const HeroRightVideoButtonArrow = styled.div`
    width: 39.13%;
    aspect-ratio: calc(159/177);
    background-image: url(${videoButtonArrow});
    background-position: center;
    background-repeat: no-repeat;
    background-size:contain;
`;

const HeroRightAvatar = styled.div`
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


export {
    HeroUpperDiv, HeroDiv, HeroLeftDiv, HeroLeftTitle, HeroLeftContent, HeroLeftButton,
    HeroRightDiv, HeroRightVideoDefault, HeroRightVideoButton, HeroRightVideoButtonArrow, HeroRightAvatar
};