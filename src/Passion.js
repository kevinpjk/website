import React from 'react';
import styled from 'styled-components';
import { Row, Col, Container, Carousel, Image, Card } from 'react-bootstrap';

const Styles = styled.div `
    .content {
        vertical-align: top;
        font-size: 14pt;
        border: 3px solid transparent;
        padding-bottom: 40px;
        padding-top: 20px;
    }

    .title {
        text-align: center;
        height: 80px;
        background-color: #92bfde;
        color: white;
    }

    p {
        text-indent: 20px;
    }

    .titleText {
        padding-top: 17.5px;
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
                    <h2 className="titleText">Passion</h2>
                </div>

                <div className="spacing"></div>

                <Container>
                    <div className="content">
                        <Row>
                            <Col>
                                <Container>
                                    <h4 className="subtitle">Hip-hop &amp; Urban Dancing</h4>
                                    <p>I am a choreographer and the co-president of FunKtion, a student-led multicultural dance crew at the University of Michigan.</p>
                                    <p>I have organized performances with dance teams around Mid-west and performed for thousands of people on and off campus.</p>
                                    <p>From having zero dance experience when I entered college, I now choreograph dance pieces and create dance formations and routines. I also edit music cuts to create a smooth and entertaining performance</p>
                                </Container>
                            </Col>
                            <Col>
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/KiVdmw0N0gQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </Col>
                        </Row>

                        <div className="spacing"></div>
                        <div className="spacing"></div>

                        <Row>
                            <Col>
                                <iframe src="https://open.spotify.com/embed-podcast/show/6OfvgxM9SxIVBpqRdSJ1e4" width="100%" height="232" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                            </Col>
                            <Col>
                                <h4 className="subtitle">Podcasting</h4>
                                <Container>
                                    <p>I started my own podcast show, Dandelion Dance, in November 2020, where I act as the writer, the host, and also the editor.</p>
                                    <p>This show provides a medium for me to express my creative thoughts. Every Tuesday, I release a 15-minutes episode where I talk about a topic in life that I find amusing, inspiring, or thought-provoking.</p>
                                    <p>I hope to use my voice and bring people's attention to issues I care about, and I wlso wish to share my knowledge and stories to give people some food for thoughts and a brief moment to unwind as they listen to my show.</p>
                                </Container>
                            </Col>
                        </Row>

                        <div className="spacing"></div>
                        <div className="spacing"></div>

                        <Row>
                            <Col>
                                <Container>
                                    <h4 className="subtitle">Acoustic Guitar</h4>
                                    <p>I have been playing acoustic guitar for 7 years, primarily focusing on fingerstyle and chord strumming.</p>
                                    <p>In my free time, I would arrange chords and fingerstyle sheet music.</p>
                                    <p>My favorite thing to do with guitar is to accompany it with singing and make covers of songs I enjoy.</p>
                                </Container>
                            </Col>

                            <Col>
                                <Container>
                                    <h4 className="subtitle">Creative Writing</h4>
                                    <p>I own a personal Mandarin blog that gathers thousands of views. I have been operating it since 2017.</p>
                                    <p>My main categories of work include fictional short stories, personal essays, and book and movie reviews on my favorite works.</p>
                                    <p>In 2020, I compiled 20 pieces of my writing in the past few years into a paperpack book.</p>
                                </Container>
                            </Col>
                        </Row>
                        <div className="spacing"></div>
                        <div className="spacing"></div>
                    </div>
                </Container>
            </div>
        </Styles>
    )
}