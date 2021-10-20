import React from 'react';
import '../styles/Project.css';
import Card1 from './CardUI';
import img1 from '../img/img1.jpg';



function Project() {
    return (
        <div className='Project'>
            <div className="Header text-center">
                <div className="container-fluid d-flex justify-content-center">
                 <div className="row">
                   <div className="col-md-4">
                     <Card1 imgsrc={img1} title = "Card1"/>
                   </div>
                   <div className="col-md-4">
                      <Card1 imgsrc = {img1} title = "Card2"/>
                     </div>
                   <div className="col-md-4">
                   <Card1 imgsrc={img1} title = "Card3"/>
                 </div>
                  </div>
                </div>
            </div>
        </div>
    )
}

export default Project;
