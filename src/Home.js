import React from 'react'
import styled from 'styled-components';
import { Row, Col, Container } from 'react-bootstrap';
// TODO: Use Cards for sub-sections of project and passions
// Use Carousel for actual project and experience page
const Styles = styled.div `
    .mainText, .projects, .passions {
        display: inline-block;
        vertical-align: top;
        text-align: center;
        border: 3px solid transparent;
        padding-bottom: 40px;
        padding-top: 20px;
    }

    .title {
        vertical-align: top;
        text-align: center;
        height: 50px;
        background-color: #92bfde;
        color: white;
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

export const Home = () => {
    return (
        <Styles>
            <div className="title">
                <h2>Home Page</h2>
            </div>
            <Container>
                <div className="mainText">
                    <p>My name is Jiankai (Kevin) Pu. </p>
                    <p>I am a senior studying Computer Science and Psychology at the University of Michigan. I am enthusiastic about music, dancing, and creative writing.</p>
                    <p>You can find my projects, experiences and passions here.</p>
                </div>
            </Container>

            <div className="title">
                <h2>Projects</h2>
            </div>
            <div className="projects">
                <Row>
                    <Col>
                        <h4 className="subtitle">Search Engine</h4>
                        <Container>
                            <p>A scalable search engine implementation using hadoop pipieline and map reduce</p>
                        </Container>
                    </Col>
                    <Col>
                        <h4 className="subtitle">Endless Runner</h4>
                        <Container>
                            <p>A web-based game that generates obstacles and pick-ups and keeps the player running</p>
                        </Container>
                    </Col>
                    <Col>
                        <h4 className="subtitle">Client-side Dynamic Social Media</h4>
                        <Container>
                            <p>An Instagram clone application using client-side dynmaic pages, REST API, and React</p>
                        </Container>
                    </Col>
                </Row>
            </div>
            <div className="spacing"></div>

            <div className="title">
                <h2>Passions</h2>
            </div>
            <div className="passions">
                <Row>
                    <Col>
                        <h4 className="subtitle">Dancing</h4>
                        <Container>
                            <p>I do urban and hip-hop dancing in my free time. A choreogrpaher and co-president on the dance crew FunKtion</p>
                        </Container>
                    </Col>
                    <Col>
                        <h4 className="subtitle">Guitar</h4>
                        <Container>
                            <p>I have played acoustic guitar for 7 years</p>
                        </Container>
                    </Col>
                    <Col>
                        <h4 className="subtitle">Creative Writing</h4>
                        <Container>
                            <p>I own a Chinese public blog and have compiled a book with my free writing pieces</p>
                        </Container>
                    </Col>
                </Row>
            </div>
        </Styles>
    )
}