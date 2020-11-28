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
    }
    
    .passions {
        text-indent: 20px;
    }

    p {
        text-align: left;
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
        height: 30px;
    }
`;

export const Home = () => {
    return (
        <Styles>
            <Container>
                <div className="intro">
                    <Row>
                        <Col>
                            <Image src={profile} alt="Profile" rounded style={{width:300, height:300}}/>
                        </Col>
                        <Col sm={8}>
                            <div className="mainText">
                                <p>Welcome! My name is Jiankai (Kevin) Pu. </p>
                                {/* <p>I am a senior studying Computer Science and Psychology at the University of Michigan. And I intend to enroll in a Graduate program starting Fall 2021 to further my study in Computer Science and Human-Computer Interaction.<br/>Right now, I'm also actively looking for internships for summer 2021.</p> */}
                                <p>I am a senior studying Computer Science and Psychology at the University of Michigan.</p>
                                <p>To me, Psychology involves how human beings interact with each other, while technologies provide innovative means for people to communicate, express, and create. I am interested in the intersection of the two, and I want to design products that best allow users to take advantage of the technology and express their creativity.</p>
                                <p>In my free time, I dance, play acoustic guitar, and do creative writing.</p>
                                <p>I recently started a podcast show called <a href="https://open.spotify.com/show/6OfvgxM9SxIVBpqRdSJ1e4?si=WZkgmRV4QbqPwnp1vYhXhQ">Dandelion Dance</a>!</p>
                                <p>I also operate a Chinese blog, <a href="http://mp.weixin.qq.com/mp/homepage?__biz=MzUyOTE1MDkyNw==&hid=1&sn=51b3ed183b691323c64278af12cd8bf8&scene=18#wechat_redirect">Onomatopoeia</a>.</p>
                                <p>You can find my work and research experiences, my personal projects, and my passions here. Enjoy :)</p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>


            <div className="blueContent">
                <div className="spacing"></div>

                <h2 className="title">Experience</h2>

                <div className="spacing"></div>

                <Container>
                    <div className="projects">
                        <Row>
                            <Col>
                                <h4 className="subtitle">Full-stack Student Developer</h4>
                                <Container>
                                    <p>I worked on a year-long multidisciplinary design project for Learning A-Z, an education technology company</p>
                                </Container>
                            </Col>
                            <Col>
                                <h4 className="subtitle">HCI Research Assistant</h4>
                                <Container>
                                    <p>At the Computational HCI lab, I did my research project on the computational modelling of user's learning on a touchscreen interface</p>
                                </Container>
                            </Col>
                        </Row>
                    </div>
                </Container>

                <div className="spacing"></div>
                    
                <h2 className="title">Project</h2>

                <div className="spacing"></div>

                <Container>
                    <div className="projects">
                        <Row>
                            <Col>
                                <h4 className="subtitle">Search Engine</h4>
                                <Container>
                                    <p>A scalable search engine implementation using Hadoop pipieline and MapReduce</p>
                                </Container>
                            </Col>
                            <Col>
                                <h4 className="subtitle">Dynamic Social Media</h4>
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
                <div className="spacing"></div>
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
                                <p>I do urban and hip-hop dancing in my free time. I am a choreogrpaher and the co-president of the dance crew FunKtion.</p>
                                <p>Here are some of the photos taken at our best performances in 2019! We create our original routines and present them to thousands of people!</p>
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
                            <iframe src="https://open.spotify.com/embed-podcast/show/6OfvgxM9SxIVBpqRdSJ1e4" width="100%" height="232" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                        </Col>
                        <Col>
                            <h4 className="subtitle">Podcasting</h4>
                            <Container>
                                <p>I started my own podcast show, Dandelion Dance, in November 2020, where I act as the writer, the host, and also the editor.</p>
                                <p>This show provides a medium for me to express my creative thoughts. I review books, movies, and I comment on social topics and express my takes on life.</p>
                            </Container>
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

                <div className="spacing"></div>
                <div className="spacing"></div>
            </Container>
        </Styles>
    )
}