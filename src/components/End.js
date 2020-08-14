import React from 'react';
import '../FontAwesome'
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// TODO: Needs to get the icons showing up

const Styles = styled.div`
    .end {
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
        font-size: 40pt;
        z-index:1
    }

    .icon {
        padding-right: 35px;
        padding-left: 35px;
        padding-top: 100px;
        color: white;
    }
`;

export const End = () => (
    <Styles>
        <div className="end">
            <div className="icons">
                <Row>
                    <Col>
                        <a className="icon" href="https://github.com/kevinpjk"><FontAwesomeIcon icon={['fab', 'github']} /></a>
                        <a className="icon" href="mailto: kevin99pjk@gmail.com"><FontAwesomeIcon icon={['fab', 'google']} /></a>
                        <a className="icon" href="https://www.linkedin.com/in/jiankai-kevin-pu"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a>
                    </Col>
                </Row>
            </div>
        </div>
    </Styles>
)