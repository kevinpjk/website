import React from 'react'
import styled from 'styled-components';
import { Row, Col, Container, Carousel, Image, Card } from 'react-bootstrap';
import profile from "./assets/profile.jpeg";
import dance1 from "./assets/dance1.jpeg";
import dance2 from "./assets/dance2.jpeg";
import dance3 from "./assets/dance3.jpeg";
// TODO: Use Cards for sub-sections of project and passions
// Use Carousel for actual project and experience page
const Styles = styled.div `
    .mainText, .projects, .passions {
        display: inline-block;
        vertical-align: top;
        text-align: center;
        font-size: 14pt;
        border: 3px solid transparent;
        padding-bottom: 40px;
        padding-top: 20px;
    }

    .intro {
        padding-top: 20px;
        padding-bottom: 40px;
    }

    .title {
        place-items: center;
        text-align: center;
        height: 50px;
        padding-top: 20px;
        color: #29476c;
    }

    .blueContent {
        background-color: #92bfde;
        color: white;
    }

    .subtitle {
        color: #29476c;
        place-items: center;
        padding-bottom: 10px;
        padding-top: 20px;
    }

    .caption {
        font-size: 12pt;
    }

    .spacing {
        height: 20px;
    }
`;

export const Home = () => {
    return (
        <Styles>
            <Container>
                <div className="intro">
                    <Row>
                        <Col>
                            <Image src={profile} alt="Profile" rounded style={{width:270, height:270}}/>
                        </Col>
                        <Col sm={8}>
                            <div className="mainText">
                                <p>Welcome! My name is Jiankai (Kevin) Pu. </p>
                                <p>I am a senior studying Computer Science and Psychology at the University of Michigan. And I intend to enroll in a Graduate program starting Fall 2021 to further my study in Computer Science. Right now, I'm also actively looking for internships for summer 2021.</p>
                                <p>To me, Psychology involves how human beings interact with each other, while technologies provide innovative means for people to communicate, express, and create. I am interested in the intersection of the two, and I want to design software and interface that best allow users to take advantage of the technology and express their creativity. </p>
                                <p>In my free time, I practice dancing, acoustic guitar, and creative writing.</p>
                                <p>You can find my projects, experiences and passions here.</p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>

            <div className="spacing"></div>

            <div className="blueContent">
                <div className="spacing"></div>
                
                <h2 className="title">Projects</h2>

                <div className="spacing"></div>
                <div className="spacing"></div>

                <Container>
                    <div className="projects">
                        <Row>
                            <Col>
                                <h4 className="subtitle">Search Engine</h4>
                                <Container>
                                    <p>A scalable search engine implementation using hadoop pipieline and map reduce</p>
                                </Container>
                            </Col>
                            <Col>
                                <h4 className="subtitle">Client-side Dynamic<br/>Social Media</h4>
                                <Container>
                                    <p>An Instagram clone application using client-side dynmaic pages, REST API, and React</p>
                                </Container>
                            </Col>
                            <Col>
                                <h4 className="subtitle">Endless Runner</h4>
                                <Container>
                                    <p>A web-based JavaScript game that generates obstacles and pick-ups and keeps the player running</p>
                                </Container>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
            <div className="spacing"></div>

            <h2 className="title">Passions</h2>

            <div className="spacing"></div>
            <div className="spacing"></div>

            <Container>
                <div className="passions">
                    <Row>
                        <Col>
                            <h4 className="subtitle">Dancing</h4>
                            <Container>
                                <p>I do urban and hip-hop dancing in my free time. A choreogrpaher and co-president on the dance crew FunKtion.</p>
                                <p>Here are some of the photos taken at our best performances in 2019! We create our original routine and present them to thousands of people!</p>
                            </Container>
                        </Col>

                        <Col>
                            <Carousel>
                                <Carousel.Item>
                                    <Image src={dance1} alt="Dance 1" rounded style={{width:500, height:333}}/>
                                    <Carousel.Caption className="caption">
                                        <p>Taken at Dance Mix 2019, <br/>facing an audience of 1000 people</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Image src={dance2} alt="Dance 2" rounded style={{width:500, height:333}}/>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Image src={dance3} alt="Dance 3" rounded style={{width:500, height:333}}/>
                                    <Carousel.Caption className="caption">
                                        <p>Taken at Barnite Winter 2019,<br/>performing with dance crews around Mid-west</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </Col>
                    </Row>

                    <div className="spacing"></div>
                    <div className="spacing"></div>

                    <Row>
                        <Col>
                            <h4 className="subtitle">Guitar</h4>
                            <Container>
                                <p>Started in high school, I have been playing the acoustic guitar for 7 years.</p>
                                <p>I practice both fingerstyle picking and also struming. I like to accompany guitar with singing, creating covers of my favorite songs.</p>
                            </Container>
                        </Col>
                        <Col>
                            <h4 className="subtitle">Creative Writing</h4>
                            <Container>
                                <p>I own a Chinese public blog where I post my personal essays, short stories, and book and movie reviews. I have been operating this blog since 2017.</p>
                                <p>In 2020, I have compiled a book with my 20 pieces of writing.</p>
                            </Container>
                        </Col>
                    </Row>
                </div>
            </Container>
        </Styles>
    )
}