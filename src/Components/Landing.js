import React from 'react'
import '../styles/Home.css'
import mask from '../img/Home/mask.jpg'
import devfolio from "../img/Home/Devfolio.jpeg"
import discord from "../img/Home/Discord.jpeg"
import winter from '../img/winter.jpg';


const Landing = () => {
    return (
        <div>
            <section className="main-menu">
            <div class="snowflakes" aria-hidden="true">
             

                <div class="snowflake">
                ❅
                </div>
                <div class="snowflake">
                ❅
                </div>
                <div class="snowflake">
                ❆
                </div>
                <div class="snowflake">
                ❄
                </div>
                <div class="snowflake">
                ❅
                </div>
                <div class="snowflake">
                ❆
                </div>
                <div class="snowflake">
                ❄
                </div>
                <div class="snowflake">
                ❅
                </div>
                <div class="snowflake">
                ❆
                </div>
                <div class="snowflake">
                ❄
                </div>
                <div class="snowflake">
                ❅
                </div>
                <div class="snowflake">
                ❆
                </div>
                <div class="snowflake">
                ❄
                </div><div class="snowflake">
                ❅
                </div>
                <div class="snowflake">
                ❆
                </div>
                <div class="snowflake">
                ❄
                </div>
            </div>

                {/* <img src={mask} className="mask" alt="backmask" /> */}
                <h2 data-text="[CrossWoc]">[CrossWoc]</h2>
                <div className="follow">
                    <img className="devfolio text-center" src={devfolio} width="50%" alt="devfolio-button" />
                    <br></br>
                    <img className="discored" src={discord} width="50%" alt="discord-button" />
                </div>
            </section>
        </div>
    )
}

export default Landing
