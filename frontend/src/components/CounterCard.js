
import './Counter.css';
import icthall from '../../src/assets/images/icthall.png';
import ictina from '../../src/assets/images/ictaku.png';
import React from "react";
const CounterCard = () => (
   
         

<div>

  



  <div classname="crow"  >
   
        <div  style={{display:'flex', marginTop:'20px', marginBottom:'20px'}}>
      <div className="ccard" >
      
          <div className="front">
            <img className="profile" width="100%" src={icthall} alt="ICT"/>
            <h2 style={{fontWeight:'bolder', fontSize:'large'}}>Social Conversations</h2>
            <h3 style={{fontWeight:'bold'}}>Every Moment is a Fresh Beginning !</h3>
          </div>
          <div clasName="back from-left">
            
            <p className="des">
            ICT Academy was officially inaugurated by Chief Minister of Kerala Mr. Oommen Chandy on 24 June 2014 at a function held in Thiruvananthapuram in the presence of Education Minister P.K. Abdu Rabb, Additional Chief Secretary V. Somasundaram, and Higher Education Principal Secretary K.M. Abraham. 
            </p>
            
          </div>  
 
      </div>

      <div className="ccard">
      
      <div className="front">
        <img className="profile" width="100%" src={ictina} alt="ICT"/>
        <h2 style={{fontWeight:'bolder', fontSize:'large'}}>Our New Office Inaguration</h2>
        <h3 style={{fontWeight:'bold'}}>Stand Up for Every Move !</h3>
      </div>
      <div clasName="back from-left">
        
        <p className="des">
        They say with a new workplace, comes new energy, new excitement & most of all, a greater responsibility. Indeed, that is true. We embarked on a new Journey by having an Inauguration Ceremony of our office newly located at Thejaswini, TechnoPark, Trivandrum.
        </p>
        
      </div>

      

  </div>
    </div>


   
      </div>
    </div>





   
    
    
  );
  
  export default CounterCard;