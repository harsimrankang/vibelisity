import React, { useState, useEffect } from 'react';
import { Card, Row, Image, Col} from 'react-bootstrap';
import arrow from '../Images/arrowright.png';
import cafe from '../Images/cafe.png';
import './clothing.css';
const Cafes = () => {
  return (
    <div className="pt-5" style={{ backgroundColor: 'rgba(0, 38, 31, 1)', color: 'white', fontFamily: 'Signika', height:'100%'}}>
      <div class='row mx-0 px-0 w-100 py-5'>
      <div className='col-12 col-md-6 d-flex justify-content-center clothing-text'>
          <Image src={cafe} 
          className='cafeimg'
          // width='400px' height='600px'
           />
        </div>
        <div className='col-12 col-md-6 px-5 clothing-text'>
          <Row className='col-12 cafehead' style={{
              fontWeight: '600',
              // fontSize: '70px',
            }}>Amazing Cafe Experiences</Row>
            
          <Row className='col-12 px-4 pt-4 text-center' style={{
              fontWeight: '400',
              fontSize: '20px',
            }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci,
            lobortis in vitae elit, sit quam. Imperdiet id volutpat tellus nec.
            Vehicula ac magna dolor id elementum lacus urna, ac. Sit a quam eget
            ipsum amet, diam ipsum, in ultrices. Tempus ut sed amet enim
            suspendisse volutpat. Consectetur dictum ornare in quam nisl
            pulvinar. Faucibus facilisis ipsum interdum vestibulum suscipit.
            Eros molestie facilisis quis ac non aliquam integer porttitor sit.
            Diam.
          </Row>
          <div className="d-flex pt-4 px-3">
              <Image src={arrow} height='24px' width='24px'></Image>
          </div>
        </div>
        
      </div>
    </div>
  );
};
export default Cafes;
