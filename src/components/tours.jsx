import React, { useState, useEffect } from 'react';
import { Card, Row, Image, Col } from 'react-bootstrap';
import arrow from '../Images/arrowright.png';
// import tours from '../Images/tours.png';
import tours from '../Images/toursgif.gif';
import bg from '../Images/newgif.png';
import { Link } from 'react-router-dom';
import './clothing.css';
import handleWindowResize from './handleWindowResize';
const Tourtravels = () => {
  let { height, width } = handleWindowResize();
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
      <div class='row col-12 mx-5 w-100 py-5'>
        <div className='col-12 col-md-8 pt-4 pl-5 clothing-text tours-head'>
          <Row
            className='col-12 px-4'
            style={{
              fontWeight: '600',
              position:"relative",
              zIndex:'10'
              // fontSize: '128px',
            }}
          >
            Tour & Travels
          </Row>
          <div className='col-12 col-md-6 d-flex justify-content-center clothing-img gifbg'
        // style={{position:"fixed",}}
        >
          <div 
            className="tourgif"
          //   style={{
          //   position:"fixed",
          //   width: width>height?width*5/8:height*5/8,
          //   height: width>height?width*5/8:height*5/8,
          //   bottom: -height/8,
          //   left: width/2+40
          // }}
          >
          <Image style={{position:'absolute', width:"100%", height:"100%", zIndex: 2}} src={bg}/>
          <Image style={{position:'absolute', width:"100%", height:"100%",}} src={tours} />
          </div>
        </div>
          <Row
            className='col-12 col-md-8 px-4 tourdetail'
            style={{
              position:"relative",
              zIndex:'10',
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
        {/* <div className='col-12 col-md-6 d-flex justify-content-center clothing-img gifbg'
        // style={{position:"fixed",}}
        >
          <div 
            className="tourgif"
          //   style={{
          //   position:"fixed",
          //   width: width>height?width*5/8:height*5/8,
          //   height: width>height?width*5/8:height*5/8,
          //   bottom: -height/8,
          //   left: width/2+40
          // }}
          >
          <Image style={{position:'absolute', width:"100%", height:"100%", zIndex: 10}} src={bg}/>
          <Image style={{position:'absolute', width:"100%", height:"100%",}} src={tours} />
          </div>
        </div> */}
      </div>
    </div>
  );
};
export default Tourtravels;
