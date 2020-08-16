import React from 'react';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';

const Styles = styled.div `
    .content {
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

export const Experience = () => {
    return (
        <Styles>
            <div>
                <div className="title">
                    <h2>Experience</h2>
                </div>

                <Container>
                    <div className="content">
                        <h4 className="subtitle">Full-stack Student Developer</h4>
                        <p>Started in 2020, I am participating in a one-year co-op program between Learning A-Z and the University of Michigan. The company produces online learning products for grade school students.</p>
                        <p>We are tasked with producing a web-based dynamic crossword puzzle game as a part of the company's product Vocabulary A-Z for K-5 students, as a way to enhance virtual learning.</p>
                        <p>To accomplish this, I worked with 4 other engineering students and 2 design students. And we adopted the Agile development model with 2 week sprints.</p>
                        <p>We first researched and implmeneted a crossword generation algorithm using the company standard PHP, and connected it with a word bank database using MySQL to create a functional prototype. We also employed the MVC model and Angular framework to layer different services and components of the web program.</p>
                        <p>Now, we are working on implementing additional features, such as saving the real-time progress, and generating step-by-step report on how students solved the puzzle to provide feedback for teachers. We are also designing the UI theme of the webpage, as well as the animation and sound effects to make the game more engaging for students.</p>
                    </div>
                </Container>

                <Container>
                    <div className="content">
                        <h4 className="subtitle">HCI Research Assistant</h4>
                        <p>Since January of 2020, I have been working as a research assistant at the Human Computer Interaction Lab at the University of Michigan.</p>
                        <p>With the goal of creating a time and cost efficient method of measuring the usability and learnability of a user interface, speicifically on typing tasks, I revised and further developed a simulation program that models user's behavior on a device, given a pre-configured interface.</p>
                        <p>The program follows a hierarchical structure that mimics the interaction between a human and an environment with a device, which is currently set to be a touch-screen mobile device with layers of widgets as interface.</p>
                        <p>To model a human's typing behavior, I researched previous HCI and UI/UX studies, and implemenetd cognitive, perceptual, and motor components based on those results and patterns. Then, I connected those components and developed bahviors such as visual search, memory recall, reading, and typing. I also animate the process of reading and transcribing text to provide straight-forward representation of a simulated user's behavior.</p>
                        <p>Right now, I am working with my mentor to create more complex behaviors and mechanisms on modern devices, such as correcting wrong input and auto-correct. We hope to create an accurate model on touch-screen devices, then potentially expanding the project to describe other interfaces in the future.</p>
                    </div>
                </Container>

                <div className="title">
                    <h2>Projects</h2>
                </div>

                <Container>
                    <div className="content">
                        <h4 className="subtitle">Search Engine</h4>
                        <p>A scaleable search engine similar to a commercial search engine</p>
                        <p>Indexing implemented with MapReduce on Hadoop pipeline to allow large scaling</p>
                        <p>Information retrieval based on both tf-idf and PageRank scores</p>
                        <p>Search interface driven by React with user-driven scoring and summarization</p>

                        <span className="spacing" />

                        <h4 className="subtitle">Endless Runner</h4>
                        <p>A web-based side-scroller game using Vue framework and JavaScript</p>
                        
                        <span className="spacing" />

                        <h4 className="subtitle">Client-side Dynamic Social Media</h4>
                        <p>An Instagram clone application using client-side dynmaic pages, REST API, and React</p>
                        <p>Render webpages to make asynchronous calls and update content seamelessly</p>
                        <p>Allows users to create profile, log in, make posts, and react to other user's posts</p>
                    </div>
                </Container>
            </div>
        </Styles>
    )
}