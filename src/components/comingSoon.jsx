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
import linkedin_bottom from "../Images/linkedin-bottom.png"
import insta_bottom from "../Images/insta-bottom.png"
import whatsapp_bottom from "../Images/whtsapp-bottom.png"
import './comingsoon.css';
const ComingSoon = () => {
  return (
    <>
      <div
        className='row mx-0 px-0 pt-5'
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
            <div className='col-12 col-md-6 d-flex justify-content-center'>
              <form className='col-10 col-md-12 col-lg-12' action='/action_page.php'>
                <label className="col-12 p-5 justify-content-center text-center"
                style={{borderStyle:'dashed', color: 'white', borderColor: 'white'}}
                >
                <input type='file' id='myFile' name='filename' 
                style={{display:'none' }}
                />
                Upload Resume
                </label>
                {/* <button 
                className='p-5'
                style={{borderStyle:'dashed', color: 'white', borderColor: 'white'}}
                // onClick={() => this.refs.fileInput.click()}
                > Upload Resume</button> */}
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
        <div className='col-12 col-md-10 pb-5'>
          <img className='coming-soon' src={comimg} />
        </div>
      </div>
      <div
        className='col-12 mx-0 d-flex py-2'
        style={{ background: 'rgb(229,229,229)', fontFamily: 'Signika', }}
      >
        <div className="d-flex px-2 flex-grow-1">Contact us @ +91 - 8168736459</div>
        <div className="d-flex px-2"><img src={linkedin_bottom} style={{height:"20px"}} /></div>
        <div className="d-flex px-2"><img src={insta_bottom} style={{height:"20px"}} /></div>
        <div className="d-flex px-2"><img src={whatsapp_bottom} style={{height:"20px"}} /></div>
        
        {/* <img className='endimg' src={endimg} /> */}
      </div>
    </>
  );
};
export default ComingSoon;