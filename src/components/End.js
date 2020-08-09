import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import { Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Styles = styled.div`
    .jumbo {
        background-size: cover;
        background-color: #92bfde;
        color: #efefef;
        height: 200px;
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
        height: 40px;
    }
`;

export const End = () => (
    <Styles>
        <Jumbo fluid className="jumbo">
            <div className="overlay"></div>
            <div className="spacing"></div>
            <Container>
                <Row>
                    <li><FontAwesomeIcon icon="github" href="https://github.com/kevinpjk" /></li>
                    <li><FontAwesomeIcon icon="email" href="mailto: kevin99pjk@gmail.com" /></li>
                    <li><FontAwesomeIcon icon="linkedin" href="https://www.linkedin.com/in/jiankai-kevin-pu" /></li>
                </Row>
            </Container>
        </Jumbo>
    </Styles>
)