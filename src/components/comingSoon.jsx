import React, { useState, useEffect } from 'react';
import { Card, Row, Image, Col, Button } from 'react-bootstrap';
import oursocial from '../Images/oursocial.png';
import fb from '../Images/fb.png';
import insta from '../Images/insta.png';
import whtsapp from '../Images/whtsapp.png';
import linkedIn from '../Images/linkedIn.png';
import endimg from '../Images/endimg.png';
import comimg from '../Images/comimg.png';
import upload from '../Images/upload.png';
import './comingsoon.css';
const ComingSoon = () => {
  return (
    <>
      <div
        className='row px-0 pt-5'
        style={{
          backgroundColor: 'rgba(0, 38, 31, 1)',
          color: 'white',
          fontFamily: 'Signika',
        }}
      >
        <div className='col-12 pt-5'>
          <div
            id='oursocials-parent'
            className='col-12 d-flex justify-content-center'
          >
            <div
              id='oursocials-card'
              className='d-flex flex-grow-1 card bg-transparent border-0'
            >
              <img
                className='rounded'
                src={oursocial}
                style={{
                  position: 'absolute',
                  objectFit: 'cover',
                  width: '100%',
                  height: '100%',
                }}
              />
              <div className='col-12' style={{ zIndex: 2 }}>
                <div
                  className='text-center text-white pt-3'
                  style={{ fontWeight: '700' }}
                >
                  Our Socials
                </div>
                <div className='col-12 d-flex justify-content-center py-3'>
                  <img
                    className='px-4 logoimg'
                    // style={{ height: '40px' }}
                    src={linkedIn}
                  />
                  <img
                    className='logoimg px-4'
                    // style={{ height: '40px' }}
                    src={fb}
                  />
                  <img
                    className='px-4 logoimg'
                    // style={{ height: '40px' }}
                    src={whtsapp}
                  />
                  <img
                    className='px-4 logoimg'
                    // style={{ height: '40px' }}
                    src={insta}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-12'>
          <div
            className='col-12 d-flex justify-content-center heading'
            style={{ fontWeight: '600' }}
          >
            We are Hiring!
          </div>
          <div className='col-12 d-flex justify-content-center pb-5'>
            <div className='subheading'>
              If hospitality is your thing, our team is for you! We're looking
              for dedicated team members who go the extra mile to make every
              guest feel at home
            </div>
          </div>
          <div className='col-12 d-flex py-3 justify-content-center'>
            <div className='col-10 col-md-6 d-flex justify-content-center'>
              <input
                id='name_input'
                className='d-flex form-control bg-transparent border-start-0 border-end-0 border-top-0 rounded-0'
                type='text'
                placeholder='Name'
              />
            </div>
          </div>
          <div className='col-12 d-flex py-3 justify-content-center'>
            <div className='col-10 col-md-6 d-flex justify-content-center'>
              <input
                id='contact_input'
                className='d-flex form-control bg-transparent border-start-0 border-end-0 border-top-0 rounded-0'
                type='text'
                placeholder='Phone Number'
              />
            </div>
          </div>
          <div className='col-12 d-flex py-3 justify-content-center'>
            <div className='col-10 col-md-6 d-flex justify-content-center'>
              <input
                id='email_input'
                className='form-control bg-transparent border-start-0 border-end-0 border-top-0 rounded-0'
                type='text'
                placeholder='Email'
              />
            </div>
          </div>
          <div className='col-12 d-flex py-3 justify-content-center'>
            <div className='col-10 col-md-6 d-flex justify-content-center'>
              <form action='/action_page.php'>
                <input type='file' id='myFile' name='filename' style={{display:'none' }}/>
                <button 
                // onClick={() => this.refs.fileInput.click()}
                ><img className='upload' src={upload} /></button>
              </form>
              {/* <img className='upload' src={upload} /> */}
            </div>
          </div>
          <div className='col-12 d-flex py-3 justify-content-center'>
            <Button
              className='col-10 col-md-6'
              style={{
                backgroundColor: 'white',
                borderColor: 'white',
                color: 'rgba(0, 38, 31, 1)',
              }}
              type='submit'
            >
              Submit
            </Button>
          </div>
        </div>
        <div className='col-12 pb-5'>
          <img className='coming-soon' src={comimg} />
        </div>
      </div>
      <div
        className='col-12 mx-0 d-flex justify-content-center mt-5'
        style={{ background: 'rgb(229,229,229)' }}
      >
        <img className='endimg' src={endimg} />
      </div>
    </>
  );
};
export default ComingSoon;
