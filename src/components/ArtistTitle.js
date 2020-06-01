
import React from 'react';
import styled from 'styled-components';
import { Fonts } from '../styles';

const Root = styled.div`
    height: 360px;
    width: 100%;
    background: linear-gradient(45deg, #8361c6, #8263c7);
    display: flex;
    * {
        margin: auto;
    }
`;

export default function ArtistTitle(props) {
    return (
        <Root>
            <Fonts.lg color='white'>{'Albums by ' + props.artistName}</Fonts.lg>
        </Root>
    );
}