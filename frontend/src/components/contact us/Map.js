import React from 'react';
import styled from 'styled-components';
import MapImg from '../contact us/image/map1.png';
import PText from './PText';

const MapStyles = styled.div`
  background: url(${MapImg}) no-repeat;
  background-position: center;
  background-size: cover;
  min-height: 400px;
  .container {
    position: relative;
    min-height: 400px;
  }
  .map__card {
    position: absolute;
    right: 12%;
    bottom: 10%;
    padding: 1rem;
    background: var(--deep-dark);
    width: 150%;
    max-width: 325px;
    border-radius: 12px;
  }
  .map__card__heading {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  a {
    background-image: linear-gradient(
      to right,
      #54b3d6,
      #54b3d6 50%,
      #ed2b2b 50%
    );
    
    font-size: 1.4rem;
    background-size: 200% 100%;
    background-position: -100%;
    display: inline-block;
    padding: 5px 0;
    position: relative;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: all 0.3s ease-in-out;
  }
  
  a:before{
    content: '';
    background: #54b3d6;
    display: block;
    position: absolute;
    bottom: -3px;
    left: 0;
    width: 0;
    height: 3px;
    transition: all 0.3s ease-in-out;
  }
  
  a:hover {
   background-position: 0;
  }
  
  a:hover::before{
    width: 100%;
  }

  /* Presentational Styles */
   body {
     display: grid;
     font-family: 'Poppins', sans-serif;
     font-size: 20px;
     font-weight: 700;
     height: 100vh;
     place-items: center;
   }
  
  
  @media only screen and (max-width: 768px) {
    background-position: 80% center;
  }
  @media only screen and (max-width: 400px) {
    .map__card {
      max-width: none;
      right: auto;
    }
  }
`;

export default function Map() {
  return (
    <MapStyles>
      <div className="container">
        <div className="map__card">
          <h3 className="map__card__heading">ICT Academy of Kerala</h3>
          <PText>G1,Ground Floor, Thejaswini Building,Technopark, Thiruvananthapuram,Kerala, India.</PText>
          <a
            className="map__card__link"
            href="https://www.google.com/maps/place/ICT+Academy+of+Kerala/@8.5565655,76.8819826,15z/data=!4m5!3m4!1s0x0:0x5a237b1a5fa40a39!8m2!3d8.5565655!4d76.8819826"
            target="_blank"
            rel="noreferrer"
          >
            Open in google map
          </a>
        </div>
      </div>
    </MapStyles>
  );
}
