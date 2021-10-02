import React from 'react';
import "./teamCard.css";

function TeamCard() {
    return (
        <div>
            <section className="main-content">
                <div className="container">
			
                <div className="row scale-1">
                    <div className="col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-4 offset-lg-4">
                        <div className="profile-card card rounded-lg shadow p-4 p-xl-5 mb-4 text-center position-relative overflow-hidden">
                            <div className="banner"></div>
                            <img src="../img/user1.jpg" alt="" className="img-circle mx-auto mb-3"/>
                            <h3 className="mb-4">Kiran Acharya</h3>
                            <div className="text-left mb-4">
                                <p className="mb-2"><i class="fa fa-envelope mr-2"></i> kiranaa287@gmail.com</p>
                                <p className="mb-2"><i class="fa fa-phone mr-2"></i> +91 9876543215</p>
                                <p className="mb-2"><i class="fa fa-globe mr-2"></i> kiranwoe.com</p>
                                <p className="mb-2"><i class="fa fa-map-marker-alt mr-2"></i> Bangalore</p>
                            </div>
                            <div className="social-links d-flex justify-content-center">
                                <a href="#!" class="mx-2"><img src="../img/social/dribbble.svg" alt="Dribbble"/></a>
                                <a href="#!" class="mx-2"><img src="../img/social/facebook.svg" alt="Facebook"/></a>
                                <a href="#!" class="mx-2"><img src="../img/social/linkedin.svg" alt="Linkedin"/></a>
                                <a href="#!" class="mx-2"><img src="../img/social/youtube.svg" alt="Youtube"/> </a>
                            </div>
                        </div>
                    </div>
                </div>

		    
            </div>
	    </section>
	
        </div>
    )
}

export default TeamCard
