import React from 'react';
import "../styles/teamCard.css";
import user1 from "../img/user1.jpg";
import linkedin from '../img/social/linkedin.svg';
import dribble from '../img/social/dribbble.svg';
import facebook from '../img/social/facebook.svg';
import youtube from '../img/social/youtube.svg';


function TeamCard() {
    return (
        <div>
            <section className="main-content">
                <div className="container">
                <div className="row">
                    <div className="col-sm-8 col-md-6 col-lg-4">
                        <div className="profile-card card rounded-lg shadow p-4 p-xl-5 mb-4 text-center position-relative overflow-hidden">
                            <div className="banner"></div>
                            <img src={user1} alt="" className="img-circle mx-auto mb-3"/>
                            <h3 className="mb-4">Kiran Acharya</h3>
                            <div className="text-left mb-4">
                                <p className="mb-2"><i class="fa fa-envelope mr-2"></i> kiranaa287@gmail.com</p>
                                <p className="mb-2"><i class="fa fa-phone mr-2"></i> +91 9876543215</p>
                                <p className="mb-2"><i class="fa fa-globe mr-2"></i> kiranwoe.com</p>
                                <p className="mb-2"><i class="fa fa-map-marker-alt mr-2"></i> Bangalore</p>
                            </div>
                            <div className="social-links d-flex justify-content-center">
                                <a href="#!" class="mx-2"><img src={dribble} alt="Dribbble"/></a>
                                <a href="#!" class="mx-2"><img src={facebook} alt="Facebook"/></a>
                                <a href="#!" class="mx-2"><img src={linkedin} alt="Linkedin"/></a>
                                <a href="#!" class="mx-2"><img src={youtube} alt="Youtube"/> </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-8 col-md-6 col-lg-4 ">
                        <div className="profile-card card rounded-lg shadow p-4 p-xl-5 mb-4 text-center position-relative overflow-hidden">
                            <div className="banner"></div>
                            <img src={user1} alt="" className="img-circle mx-auto mb-3"/>
                            <h3 className="mb-4">Kiran Acharya</h3>
                            <div className="text-left mb-4">
                                <p className="mb-2"><i class="fa fa-envelope mr-2"></i> kiranaa287@gmail.com</p>
                                <p className="mb-2"><i class="fa fa-phone mr-2"></i> +91 9876543215</p>
                                <p className="mb-2"><i class="fa fa-globe mr-2"></i> kiranwoe.com</p>
                                <p className="mb-2"><i class="fa fa-map-marker-alt mr-2"></i> Bangalore</p>
                            </div>
                            <div className="social-links d-flex justify-content-center">
                                <a href="#!" class="mx-2"><img src={dribble} alt="Dribbble"/></a>
                                <a href="#!" class="mx-2"><img src={facebook} alt="Facebook"/></a>
                                <a href="#!" class="mx-2"><img src={linkedin} alt="Linkedin"/></a>
                                <a href="#!" class="mx-2"><img src={youtube} alt="Youtube"/> </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-8  col-md-6 col-lg-4 ">
                        <div className="profile-card card rounded-lg shadow p-4 p-xl-5 mb-4 text-center position-relative overflow-hidden">
                            <div className="banner"></div>
                            <img src={user1} alt="" className="img-circle mx-auto mb-3"/>
                            <h3 className="mb-4">Kiran Acharya</h3>
                            <div className="text-left mb-4">
                                <p className="mb-2"><i class="fa fa-envelope mr-2"></i> kiranaa287@gmail.com</p>
                                <p className="mb-2"><i class="fa fa-phone mr-2"></i> +91 9876543215</p>
                                <p className="mb-2"><i class="fa fa-globe mr-2"></i> kiranwoe.com</p>
                                <p className="mb-2"><i class="fa fa-map-marker-alt mr-2"></i> Bangalore</p>
                            </div>
                            <div className="social-links d-flex justify-content-center">
                                <a href="#!" class="mx-2"><img src={dribble} alt="Dribbble"/></a>
                                <a href="#!" class="mx-2"><img src={facebook} alt="Facebook"/></a>
                                <a href="#!" class="mx-2"><img src={linkedin} alt="Linkedin"/></a>
                                <a href="#!" class="mx-2"><img src={youtube} alt="Youtube"/> </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-8 col-md-6 col-lg-4">
                        <div className="profile-card card rounded-lg shadow p-4 p-xl-5 mb-4 text-center position-relative overflow-hidden">
                            <div className="banner"></div>
                            <img src={user1} alt="" className="img-circle mx-auto mb-3"/>
                            <h3 className="mb-4">Kiran Acharya</h3>
                            <div className="text-left mb-4">
                                <p className="mb-2"><i class="fa fa-envelope mr-2"></i> kiranaa287@gmail.com</p>
                                <p className="mb-2"><i class="fa fa-phone mr-2"></i> +91 9876543215</p>
                                <p className="mb-2"><i class="fa fa-globe mr-2"></i> kiranwoe.com</p>
                                <p className="mb-2"><i class="fa fa-map-marker-alt mr-2"></i> Bangalore</p>
                            </div>
                            <div className="social-links d-flex justify-content-center">
                                <a href="#!" class="mx-2"><img src={dribble} alt="Dribbble"/></a>
                                <a href="#!" class="mx-2"><img src={facebook} alt="Facebook"/></a>
                                <a href="#!" class="mx-2"><img src={linkedin} alt="Linkedin"/></a>
                                <a href="#!" class="mx-2"><img src={youtube} alt="Youtube"/> </a>
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
