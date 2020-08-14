import React from 'react';
import '../FontAwesome'
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// TODO: Needs to get the icons showing up

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

    .icons {
        margin-left: auto;
        margin-right: auto;
        width: 50%;
        font-size: 20pt;
    }

    .FontAwesomeIcon {
        padding: 20px;
    }

    .spacing {
        height: 40px;
    }
`;

export const End = () => (
    <Styles>
        <Jumbo className="jumbo">
            <div className="overlay"></div>
            <div className="spacing"></div>
            <div className="icons">
                <Row>
                    <Col>
                        <FontAwesomeIcon icon={['fab', 'github']} href="https://github.com/kevinpjk"/>
                        <FontAwesomeIcon icon={['fab', 'google']} href="mailto: kevin99pjk@gmail.com"/>
                        <FontAwesomeIcon icon={['fab', 'linkedin']} href="https://www.linkedin.com/in/jiankai-kevin-pu"/>
                    </Col>
                </Row>
            </div>
        </Jumbo>
    </Styles>
)