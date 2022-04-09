import React, { useState } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Image,} from 'react-bootstrap';
import navbarlogo from '../Images/navbarlogo.png';
import './homepage.css';
const Navbar = (props) => {
  return (
    <div
      id='navMain'
      className='row mx-0 px-2 py-2'
      style={{
        zIndex: 9999,
        position: 'fixed',
        width: '100%',
      }}
    >
      <div className='d-flex col-12'>
        <Link to='/' className='d-flex' style={{ textDecoration: 'none' }}>
          <Image src={navbarlogo} className='nav-logo' ></Image>
        </Link>
        <div
          className='d-flex flex-grow-1 justify-content-end nav-text'
          style={{
            color: 'white',
            fontFamily: 'Signika',
            fontWeight: '400',
          }}
        >
            <Link
              to='/clothing'
              className='d-flex px-md-3 px-1 text-white'
              style={{ textDecoration: 'none' }}
            >
              Clothing{' '}
            </Link>
            <Link
              to='/toursTravels'
              className='d-flex px-md-3 px-1 text-white'
              style={{ textDecoration: 'none' }}
            >
              Travel
            </Link>
            <Link
              to='/cafe'
              className='d-flex px-md-3 px-1 text-white'
              style={{ textDecoration: 'none' }}
            >
              Tree Cafes
            </Link>
            <Link
              to='/coming_soon'
              className='d-flex px-md-3 px-1 text-white'
              style={{ textDecoration: 'none' }}>Coming Soon</Link>

        </div>
      </div>
    </div>
  );
};
export default withRouter(Navbar);
