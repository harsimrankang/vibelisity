import React, { useState, useEffect } from 'react';
import { Card, Row, Image, Col } from 'react-bootstrap';
import shoes from '../Images/shoes.png';
import { Link } from 'react-router-dom';
// import jogger from '../Images/jogger.png';
import jogger from '../Images/joggs.png';
import purse from '../Images/purse.png';
import shirt from '../Images/tshirt.png';
import jeans from '../Images/jeans.png';
import './clothing.css';
import handleWindowResize from './handleWindowResize';
const Clothing = () => {
  let { height, width } = handleWindowResize();
  return (
    <div
      className=' pt-5'
      style={{
        backgroundColor: 'rgba(0, 38, 31, 1)',
        color: 'white',
        fontFamily: 'Signika',
        height: '100%',
        width: '100%',
        // zIndex:-2
      }}
    >
      <div
        className='row mx-0 px-0 justify-content-center'
        id='background_images1'
        style={{ position: 'relative', height: '0px', width: '100%' }}
      >
        <div
          className='d-flex mx-0 justify-content-center'
          style={{
            // position: 'absolute',
            // top: '0px',
            // width: '100%',
            // hegiht: "800px",
            // overflow: 'hidden',
            zIndex: 0,
            // paddingLeft: "100px",
            // paddingRight: "100px",
          }}
        >
          <img
            className='px-5 d-flex imgtag clothing-slideBottomHide-img tshirt'
            src={shirt}
            style={{
              // height: (7 * height) / 8,
              position: 'absolute',
             // top: '0px',
              objectFit: 'cover',
            }}
            alt=''
          />
          <img
            className='px-5 d-flex imgtag clothing-slideBottomNoHide-img jeans'
            src={jeans}
            style={{
              // height: (7 * height) / 8,
              width: '790px',
              position: 'absolute',
              // top: '0px',
              objectFit: 'contain',
            }}
            alt=''
          />
        </div>
      </div>
      <div class='row mx-0 px-0 w-100 py-5' style={{ zIndex: 3 }}>
        <div className='col-12 col-md-6 px-5'>
          <Row
            className='col-12 px-4 clothing-text head'
            style={{
              fontWeight: '500',
              // fontSize: '50px',
            }}
          >
            Details
          </Row>
          <Row
            className='col-12 col-md-8 px-4 clothing-text details'
            style={{
              fontWeight: '400',
              // fontSize: '22px',
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci,
            lobortis in vitae elit, sit quam. Imperdiet id volutpat tellus nec.
            Vehicula ac magna dolor id elementum lacus
          </Row>
        </div>
        <div className='col-12 col-md-6 d-flex justify-content-center'>
          <div
            className='clothing-img pics'
            style={{ position: 'absolute',
           //  paddingTop: '310px', width: '60%'
             }}
          >
            <div className='row col-12'>
              <div className='col-4 col-md-3 '>
                <img className='imgtag rounded' src={purse} alt='' />
              </div>
              <div className='col-4 col-md-3'>
                <img className='imgtag rounded' src={shoes} alt='' />
              </div>
              <div className='col-4 col-md-3'>
                <img className='imgtag rounded' src={jogger} alt='' />
              </div>
            </div>
          </div>
        </div>
        <div
          className='col-12 px-5 clothing-text cloth-text'
          style={{
            fontWeight: '600',
            // fontSize: '96px',
            // paddingTop: '370px',
            zIndex: 2,
          }}
        >
          <Link
            to='/toursTravels'
            style={{ textDecoration: 'none', color: 'white' }}
          >
            Coolest Essentials
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Clothing;
