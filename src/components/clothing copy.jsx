import React, { useState, useEffect } from 'react';
import { Card, Row, Image, Col } from 'react-bootstrap';
import shoes from '../Images/shoes.png';
import jogger from '../Images/jogger.png';
import purse from '../Images/purse.png';
import shirt from '../Images/tshirt.png';
import './clothing.css';
const Clothing = () => {
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
          <div className='col-12 px-2 clothing-text'  
          style={{
              fontWeight: '600',
              fontSize: '96px',
              paddingTop: '370px'
            }}>
          Coolest Essentials
          </div>
        </div>
        <div className='col-6 d-flex justify-content-center'>
        <div
          className='px-0'
          id='background_images1'
          style={{ position: 'fixed', height: '0px', width: '100%'}}
        >
          <div
            style={{
              position: 'absolute',
            //   top: '0px',
              width: '100%',
              overflow: 'hidden',
            }}
          >
            <img className='imgtag' src={shirt} alt='' />
          </div>
        </div>
        <div
          className='pl-3 clothing-img'
          style={{ position: 'absolute', paddingTop: '380px', width:'60%', }}
        >
            <div className='row col-12'>
            <div className="col-3"><img className='imgtag rounded' src={purse} alt='' /></div>
            <div className="col-3"><img className='imgtag rounded' src={shoes} alt='' /></div>
            <div className="col-3"><img className='imgtag rounded' src={jogger} alt='' /></div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};
export default Clothing;
