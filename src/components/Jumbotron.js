import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import img from '../assets/background.jpeg';

const Styles = styled.div`
    .jumbo {
        background: url(${img}) no-repeat fixed bottom;
        background-size: cover;
        color: #efefef;
        height: 400px;
        position: relative;
        text-align: center;
        z-index: -3;
    }

    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -2;
    }

    .spacing {
        height: 80px;
    }
`;

export const Jumbotron = () => (
    <Styles>
        <Jumbo fluid className="jumbo">
            <div className="overlay"></div>
            <div className="spacing"></div>
            <Container>
                <h1>Jiankai Kevin Pu</h1>
                <p>~Website still under construction~</p>
            </Container>
        </Jumbo>
    </Styles>
)