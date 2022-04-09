import React from 'react';
import layer1 from '../Images/Layer1.png';
import { Link } from 'react-router-dom';
import layer2 from '../Images/Layer2.png';
import logo from '../Images/logo.png';
import arrowDown from '../Images/arrowdown.png';
import handleWindowResize from './handleWindowResize';
import './homepage.css';
const Homepage = () => {
  let { height, width } = handleWindowResize();
  return (
    <div style={{ width: '100%' }}>
      <div class='row mx-0 px-0 w-100' style={{ width: '100%' }}>
        <div
          className='px-0'
          id='background_images1'
          style={{ position: 'fixed', height: '0px', width: '100%' }}
        >
          <div
            style={{
              position: 'fixed',
              top: '0px',
              height: height,
              width: width,
              overflow: 'hidden',
            }}
          >
            <img
              className='imgtag'
              src={layer2}
              style={{ height: '100%', width: '100%', objectFit: 'cover' }}
              alt=''
            />
          </div>
        </div>
        <div
          className='px-0 zoom-in-out-box'
          style={{
            position: 'fixed',
            top: height / 10,
            // paddingTop: '380px',
            width: width,
            height: height,
            overflow: 'hidden',
          }}
        >
          <img
            className='imgtag'
            src={layer1}
            style={{ height: '100%', width: '100%', objectFit: 'cover' }}
            alt=''
          />
        </div>
        <div className='col-12' style={{ zIndex: '10' }}>
          <div className='row col-12 mx-0 px-0 pt-1 justify-content-center'>
            <img className='imgtag logo center d-flex' src={logo} alt='' />
          </div>
          <div
            className='col-12 heading-text mx-0 px-0 text-center text-white'
            style={{
              fontFamily: 'Signika',
              fontWeight: '600',
            }}
          >
            VIBELISITY
          </div>
          <div className='row py-0 col-12 mx-0 justify-content-center'>
            <div
              className='d-flex text-white p-4 text-center head-body'
              style={{
                backgroundColor: 'rgb(0,38,31)',
                borderRadius: '6px',
                fontFamily: 'Signika',
                fontWeight: '400',
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci,
              lobortis in vitae elit, sit quam. Imperdiet id volutpat tellus
              nec. Vehicula ac magna dolor id elementum lacus urna, ac. Sit a
              quam eget ipsum amet, diam ipsum, in ultrices. Tempus ut sed amet
              enim
            </div>
          </div>
          <div className='col-12 mx-0 px-0 pt-3'>
            <div
              className='col-12 pt-4 text-center text-white'
              style={{ fontFamily: 'Signika', fontWeight: '400' }}
            >
              Check out our other products here
            </div>
            <div className='col-12 d-flex py-3 mx-0 justify-content-center'>
              <Link to='/clothing' style={{ textDecoration: 'none' }}>
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
