import styled, { css } from 'styled-components';
import colors from './colors';

const Text = styled.p`
    -webkit-margin-before: 0px;
    -webkit-margin-after: 0px;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
    color: ${props => props.color ? colors[props.color] : colors.charcoal};
    ${props => props.align && css`text-align: ${props.align};`}
    font-weight: ${props => props.weight ? props.weight : 400};
`;

export default {
    sm: styled(Text)`
        font-size: 14px;
    `,
    md: styled(Text)`
        font-size: 16px;
    `,
    lg: styled(Text)`
        font-size: 34px;
    `
}