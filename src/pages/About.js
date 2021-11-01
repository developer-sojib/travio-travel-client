import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import sectionBg from "./../assets/images/sectionBg.png";
import Bounce from "react-reveal/Bounce";
import Zoom from "react-reveal/Zoom";
import about from './../assets/images/about1.jpg';

const About = () => {
  return (
    <div className='pt-5 pb-5 bg-dark text-white'>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img className='p-3 bg-white shadow img-fluid' src={about} alt="" />
          </div>
          <div className="col-md-6 pt-3 ps-4">
            <h6 className='text-warning'>ABOUT TRAVIO</h6>
            <h1>World Best Travel Agency Company Since 2008.</h1>
            <p className='text-secondary mt-2'> Man is a traveler by nature. He does not like to keep static at a place for a long time. So, people like to visit new places whenever they find time and opportunity. People travel for different purposes. Some travel for getting an education and some travel for pleasure. Many people also travel for business and employment. Travelling is, indeed, very pleasant. It is useful too. By traveling to new places we can know new <br /> people and learn many new things. Travelling opens new vistas of experience and understanding for us. </p>
            <button className='btn btn-warning fs-5 fw-bold px-4 py-2'>Find Tours</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
