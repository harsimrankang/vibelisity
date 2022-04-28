import React, { useState, useEffect } from 'react';
import { Card, Row, Image, Col } from 'react-bootstrap';
import arrow from '../Images/arrowright.png';
// import tours from '../Images/tours.png';
import bak1 from '../Images/bakery1.png';
import bak2 from '../Images/bakery2.png';
import { Link } from 'react-router-dom';
import bak3 from '../Images/bakery3.png';
import './clothing.css';
import handleWindowResize from './handleWindowResize';
const Bakery = () => {
  let { height, width } = handleWindowResize();
  return (
    <div
      className='row mx-0 col-12 pt-5'
      style={{
        backgroundColor: 'rgba(0, 38, 31, 1)',
        color: 'white',
        fontFamily: 'Signika',
        height: '100%',
      }}
    >
      <div class='row col-12 mx-0 w-100 py-5'>
        <div className='row col-12 pt-4 mx-md-5  clothing-text '>
          <div
            className='col-12 col-md-6 pl-5 bak-head'
            style={{
              fontWeight: '600',
              // position:"relative",
              zIndex: '10',
              // fontSize: '128px',
            }}
          >
            India’s First Mountain Bakery
          </div>
          <div className='col-12 col-md-6 d-flex justify-content-center clothing-img bak-body'>
            <div className='bakeryimgs' style={{ position: 'relative' }}>
              <Image
                className='bakery2'
                // style={{
                //   borderTopRightRadius: '100px',
                //   borderTopLeftRadius: '100px',
                //   borderBottomLeftRadius: '100px',
                //   borderBottomRightRadius: '100px',
                // }}
                //    style={{position:'absolute', width:"100%", height:"100%", zIndex: 2}}
                src={bak2}
              />
              <Image
                className='bakery3'
                // style={{
                //   borderTopRightRadius: '100px',
                //   borderTopLeftRadius: '100px',
                //   borderBottomLeftRadius: '100px',
                //   borderBottomRightRadius: '100px',
                // }}
                src={bak3}
              />
              <Image
                className='bakery1'
                // style={{
                //   borderTopRightRadius: '100px',
                //   borderTopLeftRadius: '100px',
                //   borderBottomLeftRadius: '100px',
                //   borderBottomRightRadius: '100px',
                // }}
                src={bak1}
              />
            </div>
          </div>
          <Row
            className='col-12 col-md-6 px-4 pl-5 bakdetail'
            style={{
              // position:"relative",
              zIndex: '10',
              fontWeight: '400',
              fontSize: '22px',
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci,
            lobortis in vitae elit, sit quam. Imperdiet id volutpat tellus nec.
            Vehicula ac magna dolor id elementum lacus urna, ac. Sit a quam eget
            ipsum amet, diam ipsum, in ultrices. Tempus ut sed amet enim
            suspendisse volutpat. Consectetur dictum ornare in quam nisl
            pulvinar.
          </Row>
          <Link
            className='d-flex pt-4 px-2'
            to='/coming_soon'
            style={{ textDecoration: 'none', color: 'white' }}
          >
            <Image src={arrow} height='24px' width='24px'></Image>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Bakery;
