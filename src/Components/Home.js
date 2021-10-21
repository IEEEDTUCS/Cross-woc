import React from 'react';
import Intro from './Intro';
import Sponsor from './Sponsor';
import Project from './Project';
import Landing from './Landing';
import '../styles/Home.css'

function Home() {
    return (
        <div class='Home'>
            <Landing />            
            <Intro />
            <Sponsor />
            <Project />
        </div>
    )
}

export default Home
