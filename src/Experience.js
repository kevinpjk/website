import React from 'react';
import styled from 'styled-components';
import { Row, Col, Container, Carousel, Image, Button, ResponsiveEmbed } from 'react-bootstrap';
import endless_runner1 from "./assets/endless_runner1.jpeg";
import endless_runner2 from "./assets/endless_runner2.jpeg";
import endless_runner3 from "./assets/endless_runner3.jpeg";
import crossword_screenshot1 from "./assets/crossword_screenshot_1.png";
import crossword_screenshot2 from "./assets/crossword_screenshot_2.png";
import crossword_screenshot3 from "./assets/crossword_screenshot_3.png";

const Styles = styled.div `
    .content {
        vertical-align: top;
        font-size: 14pt;
        border: 3px solid transparent;
        padding-bottom: 40px;
        padding-top: 20px;
    }

    p {
      text-indent: 20px;  
    }
    .title {
        text-align: center;
        height: 80px;
        background-color: #92bfde;
        color: white;
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

    .caption {
        font-size: 12pt;
    }

    .spacing {
        height: 30px;
    }
`;

export const Experience = () => {
    return (
        <Styles>
            <div>
                <div className="title">
                    <h2 className="titleText">Experience</h2>
                </div>

                <Container>
                    <div className="content">
                        <Row>
                            <Col>
                                <Container>
                                    <h4 className="subtitle">Full-stack Student Developer</h4>
                                    <p>Throughout 2020, I participated in a one-year co-op program between Learning A-Z and the University of Michigan. The company produces online learning products for grade school students.</p>
                                    <p>I was tasked with producing a web-based dynamic crossword puzzle game as a part of the company's product Vocabulary A-Z for K-5 students, as a way to enhance virtual learning.</p>
                                    <p>To accomplish this, I worked with 4 other engineering students and 2 design students. And we adopted the Agile development model with 2 week sprints.</p>
                                    <p>We first researched and implmeneted a crossword generation algorithm using the company standard PHP, and connected it with a word bank database using MySQL, creating a functional prototype. We also employed a modified MVC model and AngularJS framework to layer different services and components of the web program.</p>
                                    <p>We also implemented additional features, such as saving the real-time progress, and generating step-by-step report on how students solved the puzzle to provide feedback for teachers. We designed the UI theme of the webpage, a backstory and a voiced game character, as well as the animation and sound effects to make the game more engaging for students.</p>
                                    <p>I took part in developing a game tutorial to guide the new users, and I collaborated with our UX designer to create accessible features so children with disabilities can still use our product.</p>
                                </Container>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <h6 className="subtitle">High Fidelity Demo</h6>
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/uuKlxuKOdo8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </Col>
                            <Col>
                                <h6 className="subtitle">Actual Game Screenshot</h6>
                                <Carousel>
                                    <Carousel.Item>
                                        <Image src={crossword_screenshot1} alt="Crossword Screenshot 1" rounded style={{width:600, height:264}}/>
                                        <Carousel.Caption className="caption">
                                            <p>Start screen of the game tutorial</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <Image src={crossword_screenshot2} alt="Crossword Screenshot 2" rounded style={{width:600, height:264}}/>
                                        <Carousel.Caption className="caption">
                                            <p>Initial grid of the actual game </p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <Image src={crossword_screenshot3} alt="Crossword Screenshot 3" rounded style={{width:600, height:264}}/>
                                        <Carousel.Caption className="caption">
                                            <p>Game grid after user made progress</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                </Carousel>
                            </Col>
                        </Row>

                        <div className="spacing"></div>
                        <div className="spacing"></div>

                        <Row>
                            <Col>
                                <Container>
                                    <h4 className="subtitle">HCI Research Assistant</h4>
                                    <p>Started in January of 2020, I worked as a research assistant at the Computational Human Computer Interaction Lab at the University of Michigan.</p>
                                    <p>With the goal of creating a time and cost efficient method of measuring the usability and learnability of a user interface, speicifically on typing tasks, I revised and further developed a simulation program that models user's behavior on a device, given a pre-configured interface.</p>
                                    <p>The program follows a hierarchical structure that mimics the interaction between a human and an environment with a device, which is currently set to be a touch-screen mobile device with layers of widgets as interface.</p>
                                    <p>To model a human's typing behavior, I researched previous HCI and UI/UX studies, and implemenetd cognitive, perceptual, and motor components based on those results and patterns. Then, I connected those components and developed bahviors such as visual search, memory recall, reading, and typing. I also animated the process of reading and transcribing text to provide straight-forward representation of a simulated user's behavior.</p>
                                    <p>As for the future directions of this project, I am working with my mentor to create more complex behaviors and mechanisms on modern devices, such as manually correcting wrong input and using auto-correct features. We hope to create an accurate model on touch-screen devices, then potentially expanding the project to describe other interfaces in the future.</p>
                                </Container>
                            </Col>
                        </Row>
                    </div>
                </Container>

                <div className="spacing"></div>

                <div className="title">
                    <h2 className="titleText">Projects</h2>
                </div>

                <Container>
                    <div className="content">
                        <Row>
                            <Col>
                                <Container>
                                    <h4 className="subtitle">Search Engine</h4>
                                    <ul>
                                        <li>A scaleable search engine similar to a commercial search engine</li>
                                        <li>Indexing implemented with MapReduce on Hadoop pipeline to allow large scaling</li>
                                        <li>Information retrieval based on both tf-idf and PageRank scores</li>
                                        <li>Search interface driven by React with user-driven scoring and summarization</li>
                                    </ul>
                                </Container>
                            </Col>

                            <Col>
                                <Container>
                                    <h4 className="subtitle">Client-side Dynamic Social Media</h4>
                                    <ul>
                                        <li>An Instagram clone application using client-side dynmaic pages, REST API, and React</li>
                                        <li>Render webpages to make asynchronous calls and update content seamelessly</li>
                                        <li>Allows users to create profile, log in, make posts, and react to other user's posts</li>
                                    </ul>
                                </Container>
                            </Col>
                        </Row>
                        
                        <div className="spacing"></div>

                        <Row>
                            <Col>
                                <h4 className="subtitle">Endless Runner</h4>
                                <ul>
                                    <li>A web-based side-scroller game using Vue framework and JavaScript</li>
                                    <li>A themed game featuring "Wintering in Michigan", where we designed the character as a student running to class</li>
                                    <li>Implemented pick-up items, for example ramen soup to recover stamina, and obstcales, such as school bus and evil snowman for more variety and fun!</li>
                                </ul>
                            </Col>

                            <Col>
                                <Carousel>
                                    <Carousel.Item>
                                        <Image src={endless_runner1} alt="Endless Runner 1" rounded style={{width:400, height:233}}/>
                                        <Carousel.Caption className="caption">
                                            <p>Start screen of the game</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <Image src={endless_runner2} alt="Endless Runner 2" rounded style={{width:400, height:233}}/>
                                        <Carousel.Caption className="caption">
                                            <p>Character running on platform</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <Image src={endless_runner3} alt="Endless Runner 3" rounded style={{width:400, height:233}}/>
                                        <Carousel.Caption className="caption">
                                            <p>Game over screen <br/>and pick-up items</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                </Carousel>
                            </Col>

                        </Row>
                    </div>
                </Container>

            </div>
        </Styles>
    )
}