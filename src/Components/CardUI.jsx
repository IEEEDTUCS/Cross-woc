import React from 'react';
import img1 from './home/img1.jpg';
import './card-style.css';
const Card = props=>{
  return(
   <div className="card text-center">
     <div className="overflow">
       <img src={img1} alt="Image 1" className="card-img-top"/>
     </div>
     <div className="card-body text-dark">
      <h4 className="card-title">Card Title</h4>
      <p className="card-text text-secondary">
       lorum ipusmkemek jenfef nfkbefjjb nfekfn kjbfejkfbejkfbejfbj bjbj bj bjb b jb j gyf yf yfffffffffyg guyg
      </p> 
      <a href="#" className="btn btn-outline-success">Go Any</a>
   </div>
   </div>

  );
}


export default Card;