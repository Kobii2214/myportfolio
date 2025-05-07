import React from 'react';
import './certi.css';
import FadeInWhenVisible from './FadeInWhenVisible';
import Certi1 from '../assets/certi1.jpg'
import Certi2 from '../assets/certi2.jpg'
import Certi3 from '../assets/certi3.jpg'
import Certi4 from '../assets/certi4.jpg'
import Certi5 from '../assets/certi5.jpg'
import Certi6 from '../assets/certi6.jpg'


const certificates = () => {
  return (
    <div className="certificates">
      <FadeInWhenVisible delay={0}>
        <p className="certificates-description">Behold My</p>
      </FadeInWhenVisible>

      <FadeInWhenVisible delay={0.1}>
        <h2>Certificates</h2>
      </FadeInWhenVisible>

      <div className="journey2">
        <FadeInWhenVisible delay={0.2}>
          <div className="certificates-item">
            <img src={Certi1} alt="certificate" className="img-certificate"></img>
          </div>
        </FadeInWhenVisible>

        <FadeInWhenVisible delay={0.3}>
          <div className="certificates-item">
            <img src={Certi2} alt="certificate" className="img-certificate"></img>
          </div>
        </FadeInWhenVisible>

        <FadeInWhenVisible delay={0.4}>
          <div className="certificates-item">
            <img src={Certi3} alt="certificate" className="img-certificate"></img>
          </div>
        </FadeInWhenVisible>

        <FadeInWhenVisible delay={0.5}>
          <div className="certificates-item">
            <img src={Certi4} alt="certificate" className="img-certificate"></img>
          </div>
        </FadeInWhenVisible>

        <FadeInWhenVisible delay={0.6}>
          <div className="certificates-item">
            <img src={Certi5} alt="certificate" className="img-certificate"></img>
          </div>
        </FadeInWhenVisible>

        <FadeInWhenVisible delay={0.7}>
          <div className="certificates-item6">
            <img src={Certi6} alt="certificate" className="img-certificate6"></img>
          </div>
        </FadeInWhenVisible>
      </div>
    </div>
  );
};

export default certificates;
