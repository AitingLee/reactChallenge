import styled from 'styled-components'

const ColorfulDiv = styled.div<{$color?: string}>`
    color: ${props => props.$color};
`;

export { ColorfulDiv };