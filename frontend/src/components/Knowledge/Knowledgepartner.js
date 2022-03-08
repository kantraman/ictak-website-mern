import React from 'react';
import './Knowledge.css';
import k1 from '../../assets/images/k1.jfif';
import k2 from '../../assets/images/k2.png';
import k3 from '../../assets/images/k3.jpg';
import k4 from '../../assets/images/k4.png';
import k5 from '../../assets/images/k5.jfif';
import k6 from '../../assets/images/k6.jpg';
import k7 from '../../assets/images/k7.jpg';
import k8 from '../../assets/images/k8.webp'
import k9 from '../../assets/images/k9.jpg';

export const Knowledgepartner = () => {
  return (
    <div>
      <h1 style={{fontFamily:'sans-serif', fontSize:'xx-large',fontWeight:'bolder', marginTop:'100px'}}>Knowledge Partners</h1>
<div className="kcards">
  <div className="kcard">
    <img src={k1}/>
  </div>
  <div className="kcard">
  <img src={k2}/>
  </div>
  <div className="kcard">
  <img src={k3}/>
  </div>
  <div className="kcard">
  <img src={k4}/>
  </div>
  <div className="kcard">
  <img src={k5}/>
  </div>
  <div className="kcard">
  <img src={k6}/>
  </div>
  <div className="kcard">
  <img src={k7}/>
  </div>
  <div className="kcard">
  <img src={k8}/>
  </div>
  <div className="kcard">
  <img src={k9}/>
  </div>
</div>
    </div>
  )
}
