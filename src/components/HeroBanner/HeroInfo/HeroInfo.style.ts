import styled from 'styled-components'
import heroImageLaptop from '@assets/bg-herosession-laptop.png';
import heroImageMobile from '@assets/bg-herosession-mobile.png';

export const HeroInfoDiv = styled.div`
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