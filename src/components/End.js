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
                        <a class="github-ic justify content center" href="https://github.com/kevinpjk">
                            
                        </a>
                        <a class="email-ic justify content center" href="mailto: kevin99pjk@gmail.com">
                            
                        </a>
                        <a class="li-ic justify content center" href="https://www.linkedin.com/in/jiankai-kevin-pu">
                            
                        </a>
                        <FontAwesomeIcon icon={['fab', 'github']} size="xxl" />
                        <FontAwesomeIcon icon={['fab', 'google']} size="xxl" />
                        <FontAwesomeIcon icon={['fab', 'linkedin']} size="xxl" />
                    </Col>
                </Row>
            </div>
        </Jumbo>
    </Styles>
)