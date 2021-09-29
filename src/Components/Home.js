import React from 'react';
import Intro from './Intro';
import Sponsor from './Sponsor';
import Project from './Project';
import '../styles/Home.css'

function Home() {
    return (
        <div class='Home'>
            <div className="Header text-center">
                <h1 className='Title'>CrossWoc</h1>
            </div>            
            <Intro />
            <Sponsor />
            <Project />
        </div>
    )
}

export default Home
