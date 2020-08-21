import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';

const Styles = styled.div `
    .content {
        vertical-align: top;
        font-size: 14pt;
        border: 3px solid transparent;
        padding-bottom: 40px;
        padding-top: 20px;
    }

    .title {
        vertical-align: center;
        text-align: center;
        height: 80px;
        background-color: #92bfde;
        color: white;
    }

    .h2 {
        place-items: center;
    }

    .subtitle {
        color: #29476c;
        vertical-align: top;
        text-align: center;
        padding-bottom: 10px;
        padding-top: 20px;
    }

    .spacing {
        height: 20px;
    }
`;

export const Passion = () => {
    return (
        <Styles>
            <div>
                <div className="title">
                    <h2>Passion</h2>
                </div>

                <Container>
                    <div className="content">
                        <Row>
                            <Col>
                                <h4 className="subtitle">Hip-hop &amp; Urban Dancing</h4>
                                <p>I am a choreographer and co-president at FunKtion, a student-led multicultural dance crew</p>
                                <p>I organize performances, choreograph dance pieces and formations, and edit music cuts</p>
                            </Col>
                            <Col>
                            
                            </Col>
                        </Row>

                        <div className="spacing"></div>

                        <Row>
                            <Col>
                                <h4 className="subtitle">Acoustic Guitar</h4>
                                <p>I have been playing acoustic guitar for 7 years</p>
                                <p>I arrange chords and fingerstyle sheet music</p>
                                <p>I make guitar and singing covers of songs I enjoy</p>
                            </Col>

                            <Col>
                                <h4 className="subtitle">Creative Writing</h4>
                                <p>I own and operate a Mandarin blog that gathers thousands of views</p>
                                <p>I enjoy writing fiction, personal essays, and book and movie reviews</p>
                                <p>I compiled 20 pieces of my writing into a paperpack book</p>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        </Styles>
    )
}