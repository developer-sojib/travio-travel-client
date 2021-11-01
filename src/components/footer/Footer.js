import React from "react";
import "./footer.css";
import payment from "./../../assets/images/payment.png";
import logo from './../../assets/images/logo.png'
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="text-white">
      <div className="py-4 gradient">
        <Container>
          <Row>
            <Col md={4}>
              <div className="my-4">
                <img width="120px" src={logo} alt="" />
              </div>
              <p>Travel Management Solution That Takes Away The Complexity Of Business Travel. A Different Kind Of Corporate Travel Management Company.Business Travel Made Easy. </p>
            </Col>
            <Col md={2}>
              <ul className="list-unstyled footer-link">
                <li>
                  <NavLink className='text-warning' to="/home">Menus</NavLink>
                </li>
                <li>
                  <NavLink to="/home">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/about">About us</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contact us</NavLink>
                </li>
                <li>
                  <NavLink to="/courses">Courses</NavLink>
                </li>
                <li>
                  <NavLink to="/policy">Policy</NavLink>
                </li>
              </ul>
            </Col>
            <Col md={4}>
              <div className="">
                <img
                  className="img-fluid"
                  src={payment}
                  alt="payment methods"
                />
              </div>
            </Col>
            <Col md={2}>
              <ul className="list-unstyled footer-link mb-2">
                <li className='flw'>
                  <NavLink className='text-warning' to="/home">Contact Us</NavLink>
                </li>
                <li>
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                  <span className="ms-1 fs-8"> Flat 20, Reynolds Neck, North Helenaville, FV77 8WS</span>
                </li>
                <li>
                  <FontAwesomeIcon icon={faEnvelope} />
                  <span className="ms-1 fs-6"> Official: developersojib.01@gmail.com
                  </span>
                </li>
                <li>
                  <FontAwesomeIcon icon={faPhone} />
                  <span className="ms-1 fs-6"> Helpline: 01763251119(Available:10:00AM to 10.00PM)
                  </span>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
      <hr className="m-0 p-0" />
      <p className="text-center m-0 py-3 copyright">
        Copyright © Travio || 2021 All Right Reserved</p>
    </div>
  );
};

export default Footer;
