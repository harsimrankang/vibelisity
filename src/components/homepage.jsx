import React from 'react';
import { Card, Row, Image, Button } from 'react-bootstrap';
import layer1 from '../Images/Layer-1.png';
import { Link } from 'react-router-dom';
import layer2 from '../Images/Layer-2.png';
import logo from '../Images/logo.png';
import arrowDown from '../Images/arrowdown.png';
import './homepage.css';
const Homepage = () => {
  return (
    <div style={{width: '100%'}}>
      <div class='row mx-0 px-0 w-100' style={{width: '100%'}}>
        <div
          className='px-0'
          id='background_images1'
          style={{ position: 'fixed', height: '0px', width: '100%'}}
        >
          <div
            style={{
              position: 'absolute',
              top: '0px',
              width: '100%',
              overflow: 'hidden',
            }}
          >
            <img className='imgtag' src={layer2} alt='' />
          </div>
        </div>
        <div
          className='px-0 zoom-in-out-box'
          style={{ position: 'absolute', paddingTop: '380px', width: '100%', overflow: 'hidden'  }}
        >
          <img className='imgtag' src={layer1} alt='' />
        </div>
        <div className='col-12' style={{ zIndex: '10' }}>
          <div className='row col-12 mx-0 px-0 justify-content-center'>
            <img
              className='imgtag center d-flex'
              style={{ width: '380px', paddingTop: '140px', boxShadow: '' }}
              src={logo}
              alt=''
            />
          </div>
          <div
            className='col-12 mx-0 px-0 text-center text-white'
            style={{
              fontFamily: 'Signika',
              fontWeight: '600',
              fontSize: '220px',
            }}
          >
            VIBELISITY
          </div>
          <div className='row col-12 mx-0 justify-content-center'>
            <div
              className='col-8 text-white p-5 text-center'
              style={{ backgroundColor: 'rgb(0,38,31)' }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci,
              lobortis in vitae elit, sit quam. Imperdiet id volutpat tellus
              nec. Vehicula ac magna dolor id elementum lacus urna, ac. Sit a
              quam eget ipsum amet, diam ipsum, in ultrices. Tempus ut sed amet
              enim
            </div>
          </div>
          <div className='col-12 mx-0 px-0 pt-3'>
            <div className='col-12 pt-4 text-center text-white'>
              Check out our other products here
            </div>
            <div className='col-12 d-flex pt-4 mx-0 justify-content-center'>
                <Link to='/clothing' style={{ textDecoration: 'none', }}>
              <img className='d-flex' src={arrowDown} alt='' />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Homepage;
