import React from 'react'
import styled from 'styled-components';
import { Row, Col, Container } from 'react-bootstrap';
// TODO: a div with three columns on projects (endless runner, search engine, )
// a div with three columns on interests
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
            <Container fluid>
                <div className="title">
                    <h2>Home Page</h2>
                </div>
            </Container>
            <div className="mainText">
                <p>Welcome to my personal website!</p>
                <p>You can find my projects, experiences and passions here.</p>
                <p>I am a senior studying Computer Science and Psychology at the University of Michigan. I am enthusiastic about music, dancing, and creative writing.</p>
            </div>

            <Container fluid>
                <div className="title">
                    <h2>Projects</h2>
                </div>
            </Container>
            <div className="projects">
                <Row>
                    <Col>
                        <h4 className="subtitle">Endless Runner</h4>
                        <p>A web-based game that generates obstacles and pick-ups and keeps the player running</p>
                    </Col>
                    <Col>
                        <h4 className="subtitle">Search Engine</h4>
                        <p>A search engine implementation using hadoop pipieline and map reduce</p>
                    </Col>
                    <Col>
                        <h4 className="subtitle">Project 3</h4>
                        <p>A project that I have done in the past</p>
                    </Col>
                </Row>
            </div>
            <div className="spacing"></div>

            <Container fluid>
                <div className="title">
                    <h2>Passions</h2>
                </div>
            </Container>
            <div className="passions">
                <Row>
                    <Col>
                        <h4 className="subtitle">Dancing</h4>
                        <p>I do urban and hip-hop dancing in my free time. A choreogrpaher and co-president on the dance crew FunKtion</p>
                    </Col>
                    <Col>
                        <h4 className="subtitle">Guitar</h4>
                        <p>I have played acoustic guitar for 7 years</p>
                    </Col>
                    <Col>
                        <h4 className="subtitle">Creative Writing</h4>
                        <p>I own a Chinese public blog and have compiled a book with my free writing pieces</p>
                    </Col>
                </Row>
            </div>
        </Styles>
    )
}