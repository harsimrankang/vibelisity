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
const Clothing = () => {
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
          <img className='px-5 d-flex imgtag clothing-slideBottomHide-img' src={shirt} style={{
              height:"950px", position:"absolute", top: "0px"
          }} alt='' />
          <img className='px-5 d-flex imgtag clothing-slideBottomNoHide-img' src={jeans} style={{
              height:"950px",width:'790px', position:"absolute", top: "0px"
          }} alt='' />
        </div>
      </div>
      <div class='row mx-0 px-0 w-100 py-5' style={{ zIndex: 3 }}>
        <div className='col-6 pt-5 px-5'>
          <Row
            className='col-12 px-4 clothing-text'
            style={{
              fontWeight: '500',
              fontSize: '50px',
            }}
          >
            Details
          </Row>
          <Row
            className='col-8 px-4 pt-3 clothing-text'
            style={{
              fontWeight: '400',
              fontSize: '22px',
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci,
            lobortis in vitae elit, sit quam. Imperdiet id volutpat tellus nec.
            Vehicula ac magna dolor id elementum lacus
          </Row>
          {/* <div
            className='col-12 px-2 clothing-text'
            style={{
              fontWeight: '600',
              fontSize: '96px',
              paddingTop: '370px',
            }}
          >
            Coolest Essentials
          </div> */}
        </div>
        <div className='col-6 d-flex justify-content-center'>
          <div
            className='pl-5 clothing-img'
            style={{ position: 'absolute', paddingTop: '380px', width: '60%' }}
          >
            <div className='row col-12'>
              <div className='col-3'>
                <img className='imgtag rounded' src={purse} alt='' />
              </div>
              <div className='col-3'>
                <img className='imgtag rounded' src={shoes} alt='' />
              </div>
              <div className='col-3'>
                <img className='imgtag rounded' src={jogger} alt='' />
              </div>
            </div>
          </div>
        </div>
        <div
            className='col-12 px-5 clothing-text'
            style={{
              fontWeight: '600',
              fontSize: '96px',
              paddingTop: '370px',  
              zIndex:2,
             
            }}
          >
             <Link to='/toursTravels' style={{ textDecoration: 'none', color:'white' }}>
            Coolest Essentials
            </Link>
          </div>
      </div>
    </div>
  );
};
export default Clothing;
