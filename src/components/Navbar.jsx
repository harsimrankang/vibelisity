import React, { useState } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Image, Row, Col } from 'react-bootstrap';
import navbarlogo from '../Images/navbarlogo.png';
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
      <Row className='col-12'>
        <Link to='/' className='col-2' style={{ textDecoration: 'none' }}>
          <Image src={navbarlogo} height='55px' width='80px'></Image>
        </Link>
        <Col
          className='col-10 pt-2 ml-auto'
          style={{
            color: 'white',
            fontFamily: 'Signika',
            fontWeight: '400',
            fontSize: '18px',
          }}
        >
          <Row className='col-12 '>
            <Col className='col-7'></Col>
            <Link
              to='/clothing'
              className='col-1 text-white'
              style={{ textDecoration: 'none' }}
            >
              Clothing{' '}
            </Link>
            <Link
              to='/toursTravels'
              className='col-1 text-white'
              style={{ textDecoration: 'none' }}
            >
              Travel
            </Link>
            <Link
              to='/cafe'
              className='col-1 text-white'
              style={{ textDecoration: 'none' }}
            >
              Tree Cafes
            </Link>
            <Col className='col-2'>Coming Soon</Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};
export default withRouter(Navbar);
