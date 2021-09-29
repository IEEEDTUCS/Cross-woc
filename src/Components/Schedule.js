import React from 'react';
import timelineData from '../Data/timeline';
import '../styles/Schedule.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init()


function Schedule() {
    const timelineArray = timelineData.map((item) => {
        return (
            <div className='timeline-item'>
                <div className='timeline-item-content' data-aos='zoom-out-up' data-aos-easing="ease-out-cubic">
                    <time>{item.Date}</time>
                    <h3>{item.Title}</h3>
                    <span>{item.Description}</span>
                    <span className="circle" />
                </div>
            </div>
        );
    });
    

    return (
        <div className='main-container'>
                <h2 className='header'>Program Timeline</h2>
            <div className='timeline-container'>
                {timelineArray}
            </div>
        </div>
    )
}

export default Schedule
