import React from 'react';
import styled, { css } from 'styled-components';
import { Col, Row } from 'react-styled-flexboxgrid';
import { Fonts } from '../styles';

const Root = styled.div`
    min-height: 200px;
    background: ${props => css`url(${props.image});`}
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    transition: all 0.2s;
    cursor: pointer;
    :hover {
        transform: translateY(-4px);
        a {
            opacity: 1;
        }
    }
`;

const Info = styled(Row)`
    background-color: white;
    margin: 0;
    padding: 1rem;
`;

export default function Album(props) {
    return (
        <Row>
            <Col xs={4} sm={8} md={6} lg={4} >
                <Root image={props.albumCover}>
                </Root>
            </Col>
            <Col xs={10} sm={6} md={8} lg={10} >
                <Info between='xs'>
                    <Col>
                        <Fonts.md weight={600}>{props.collectionName}</Fonts.md>
                        <Fonts.sm color='grey'>{props.artistName}</Fonts.sm>
                    </Col>
                    <Col>
                        <Fonts.sm color='grey'>{props.releaseYear}</Fonts.sm>
                    </Col>
                </Info>
            </Col>
        </Row>
    );
}