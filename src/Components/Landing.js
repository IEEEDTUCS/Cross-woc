import React from 'react'
import '../styles/Home.css'
import landvid from '../img/Home/BackgroundVid.mp4'
import mask from '../img/Home/mask.jpg'
import devfolio from "../img/Home/Devfolio.jpeg"
import discord from "../img/Home/Discord.jpeg"


const Landing = () => {
    return (
        <div>
            <section class="main-menu">
                <video class="vid2" src={landvid} autoPlay loop muted type="mp4"></video>
                <img src={mask} class="mask" />
                <h2 data-text="[CrossWoc]">[CrossWoc]</h2>
                <div class="follow">
                    <img class="devfolio" src={devfolio} width="50%" alt="" />
                    <br></br>
                    <img class="discored" src={discord} width="50%" alt="" />
                </div>
            </section>
        </div>
    )
}

export default Landing
