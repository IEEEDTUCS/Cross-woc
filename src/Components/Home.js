import React from 'react';
import Intro from './Intro';
import Sponsor from './Sponsor';
import Project from './Project';
import './Home.css'
import { Button } from 'react-bootstrap';

function Home() {
    return (
        <div class='Home'>
            <div className="Header">
                <h1 className='Title'>CrossWoc</h1>
                <Button>Registration Closed</Button>
            </div>            
            <Intro />
            <Sponsor />
            <Project />
        </div>
    )
}

export default Home
