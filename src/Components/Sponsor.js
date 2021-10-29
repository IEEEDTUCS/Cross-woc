import React from 'react';
import '../styles/Sponsors.css';
import SponsorDetail from '../Data/SponsorDetail';
import SponsorEntry from './SponsorEntry';
import Button from 'react-bootstrap/Button';

function sponsorEntryCard(SponsorDetail){
    return(
        <div className="sponsor-link col-lg-6 mx-auto ">
            <SponsorEntry 
                key = {SponsorDetail.id}
                url = {SponsorDetail.url}
                title = {SponsorDetail.name}
                img = {SponsorDetail.imgURL}
            />
        </div>
    );
}


function Sponsor() {
    return (
        <div className="Sponsor"  id='sponsors'>
            
            {/* Sponsor Heading and Text */}

            <div className="sponsor-text">
                <div className="sponsor-text-heading">
                    <h1>Our Sponsors</h1>
                </div>
            
                <div className="sponsor-text-main">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sodales aliquet pretium. Quisque ultrices, metus sed cursus hendrerit, massa turpis sollicitudin velit, accumsan consequat dolor ipsum eu tellus. Cras auctor, risus ac accumsan rhoncus, magna ante suscipit quam, in porttitor enim nisl ut ligula. Etiam eget ex ipsum. In hac habitasse platea dictumst. Suspendisse ullamcorper egestas turpis id aliquet. Mauris euismod ex a purus sodales, auctor semper mauris pulvinar. Quisque mollis nisl sit amet metus vulputate, at venenatis justo porta. Pellentesque consectetur quam in sem gravida, nec sollicitudin enim maximus.</p>
                </div>
            </div>

            {/* Mapping function for Sponsor Detail Array */}
            <div className="sponsor-icon row">
                    {SponsorDetail.map(sponsorEntryCard)}
            </div>

            {/* Buttons */}
            <div className="sponsor-buttons">
                <Button type="button" className="btn" href="#" variant="dark" size="lg" active>Sponsor Us</Button>{' '}
                <Button type="button" className="btn" href="#" variant="outline-danger" size="lg" active>Download Brochure</Button>{' '}
            </div>


            
        </div>
    )
}

export default Sponsor;

