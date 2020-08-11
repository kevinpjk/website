import React from 'react';
import styled from 'styled-components';

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

                <div className="content">
                    <h4 className="subtitle">Put on resume experiences</h4>
                </div>

                <div className="title">
                    <h2>Projects</h2>
                </div>

                <div className="content">
                    <h4 className="subtitle">Endless Runner</h4>
                    <p>A web-based side-scroller game using Vue framework and JavaScript</p>
                    
                    <span className="spacing" />

                    <h4 className="subtitle">Search Engine</h4>
                    <p>A scaleable search engine similar to a commercial search engine</p>
                    <p>Indexing implemented with MapReduce on Hadoop pipeline to allow large scaling</p>
                    <p>Information retrieval based on both tf-idf and PageRank scores</p>
                    <p>Search interface driven by React with user-driven scoring and summarization</p>

                    <span className="spacing" />

                    <h4 className="subtitle">Client-side Dynamic Social Media</h4>
                    <p>An Instagram clone application using client-side dynmaic pages, REST API, and React</p>
                    <p>Render webpages to make asynchronous calls and update content seamelessly</p>
                    <p>Allows users to create profile, log in, make posts, and react to other user's posts</p>
                </div>
            </div>
        </Styles>
    )
}