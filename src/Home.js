import React from 'react'
import styled from 'styled-components';
// TODO: a div with three columns on projects (endless runner, search engine, )
// a div with three columns on interests
const Styles = styled.div `
    .mainText .projects .passions {
        text-align: center;
    }
`;

export const Home = () => {
    return (
        <Styles>
            <div className="mainText">
                <h2>Home Page</h2>
                <p>Welcome to my personal website!</p>
                <p>You can find my projects, experiences and passions here.</p>
                <p>I am a senior studying Computer Science and Psychology at the University of Michigan. I am enthusiastic about music, dancing, and creative writing.</p>
            </div>
            <div className="projects">
                <h2>Projects</h2>
                <Col>
                    <h3>Endless Runner</h3>
                    <p>A web-based game that generates obstacles and pick-ups and keeps the player running</p>
                </Col>
                <Col>
                    <h3>Search Engine</h3>
                    <p>A search engine implementation using hadoop pipieline and map reduce</p>
                </Col>
                <Col>
                    <h3>Project 3</h3>
                    <p>A project that I have done in the past</p>
                </Col>
            </div>
            <div className="passions">
                <h2>Passions</h2>
                <Col>
                    <h3>Dancing</h3>
                    <p>I do urban and hip-hop dancing in my free time. A choreogrpaher and co-president on the dance crew FunKtion</p>
                </Col>
                <Col>
                    <h3>Guitar</h3>
                    <p>I have played acoustic guitar for 7 years</p>
                </Col>
                <Col>
                    <h3>Creative Writing</h3>
                    <p>I own a Chinese public blog and have compiled a book with my free writing pieces</p>
                </Col>
            </div>
        </Styles>
    )
}