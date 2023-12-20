import styled from 'styled-components'

export const HeroDescriptionDiv = styled.div`
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
        gap: 0.5em;
    }
    @media (max-width: 480px) {
        margin: 25vw 10vw 0 10vw;
    }
    @media (max-width: 350px) {
       gap: 0em;
    }
`;

export const HeroDescriptionTitleDiv = styled.div`
    font-size:60px;
    font-weight: 700;
    width: 90%;
    word-wrap: break-word;
    line-height: 1.2;
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

export const HeroDescriptionContentDiv = styled.div`
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
        text-align: center;
        width: 70%;
    }
    @media (max-width: 480px) {
        width: 84%;
        font-size: 12px;
    }
    @media (max-width: 350px) {
        width: 100%;
    }
`;

export const HeroDescriptionDemoButton = styled.button`
    padding: 6px 16px 6px 16px;
    background: linear-gradient(152deg, #F7DC16 0%, #F7DC16 0%, #FF2A2D 100%);
    border-radius: 26px;
    font-weight: 700;
    border-width: 0;
    height: 47px;
    width: 268px;
    flex-shrink: 1;
    border: 0;
    font-size: 16px;
    @media (max-width: 680px) {
        margin: 12vw 0 0 0;
        height: 36px;
        width: 206px;
    }
    @media (max-width: 480px) {
        margin: 6vw 0 0 0;
    }

    &:hover{
        background: linear-gradient(152deg, #FF2A2D 8.49%, #F7DC16 92.21%);
        cursor: pointer;
    }
`;