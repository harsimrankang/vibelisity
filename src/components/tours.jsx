import React, { useState, useEffect } from 'react';
import { Card, Row, Image, Col } from 'react-bootstrap';
import arrow from '../Images/arrowright.png';
import tours from '../Images/tours.png';
import { Link } from 'react-router-dom';
import './clothing.css';
const Tourtravels = () => {
  return (
    <div
      className='pt-5'
      style={{
        backgroundColor: 'rgba(0, 38, 31, 1)',
        color: 'white',
        fontFamily: 'Signika',
        height: '100%',
      }}
    >
      <div class='row mx-0 px-0 w-100 py-5'>
        <div className='col-6 pt-5 px-5 clothing-text'>
          <Row
            className='col-12 px-4'
            style={{
              fontWeight: '500',
              fontSize: '50px',
            }}
          >
            Tour & Travels
          </Row>
          <Row
            className='col-8 px-4 pt-5'
            style={{
              fontWeight: '400',
              fontSize: '22px',
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci,
            lobortis in vitae elit, sit quam. Imperdiet id volutpat tellus nec.
            Vehicula ac magna dolor id elementum lacus urna, ac. Sit a quam eget
            ipsum amet, diam ipsum, in ultrices. Tempus ut sed amet enim
            suspendisse volutpat. Consectetur dictum ornare in quam nisl
            pulvinar. Faucibus facilisis ipsum interdum vestibulum suscipit.
            Eros molestie facilisis quis ac non aliquam integer porttitor sit.
            Diam.
          </Row>
          <Link
            className='d-flex pt-4 px-2'
            to='/cafe'
            style={{ textDecoration: 'none', color: 'white' }}
          >
            <Image src={arrow} height='24px' width='24px'></Image>
          </Link>
        </div>
        <div className='col-6 d-flex justify-content-center clothing-img'>
          <Image src={tours} />
        </div>
      </div>
    </div>
  );
};
export default Tourtravels;
