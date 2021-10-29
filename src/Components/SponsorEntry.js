import React from "react";

function SponsorEntry(props){
    return(
        <div className="sponsor-icon" >
            <div>
                <a  href={props.url} target="_blank" rel="noreferrer" title={props.title}> 
                    <img src = {props.img} alt="Sponsor" className="sponsor-img"  />
                </a> 
            </div>
        </div>
        );
}

export default SponsorEntry;

