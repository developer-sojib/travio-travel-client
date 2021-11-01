import React from "react";
import Bg from "./../assets/images/bg.jpg";
import { Container, Row } from "react-bootstrap";
import Bounce from "react-reveal/Bounce";
import Slide from "react-reveal/Slide";
import { NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth.js";
import banner4 from './../assets/images/banner-4.jpg';
import video from './../assets/images/video1.jpg';
import about from './../assets/images/about1.jpg';
import Course from "../components/course/Course.js";

const Home = () => {
  const { courses } = useAuth();
  return (
    <>
      <div>
        <div
          style={{
            background: `url(${Bg})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            backgroundSize: "cover",
            width: "100%",
          }}
        >
          <Container>
            <div
              style={{ height: "90vh" }}
              className="d-flex justify-content-center align-items-center"
            >
              <div className="text-center my-5 py-5">
                <Bounce left cascade>
                  <h1 className="text-white size">Explore
                    Your Travel</h1>
                </Bounce>

                <Bounce right cascade>
                  <p className="my-4 text-white fs-5">
                    Discover your next great adventure, become an explorer to get started!
                  </p>
                </Bounce>

                <Bounce>
                  <NavLink
                    to="/courses"
                    className="rounded-pill btn btn-warning fs-5 fw-bold py-2 px-4"
                  >
                    View Tour Lists
                  </NavLink>
                </Bounce>
              </div>
            </div>
          </Container>
        </div>

        <div
          id="feature"
          className="py-5"
          style={{ background: `#000` }}
        >
          <div className="text-center text-white">
            <Slide left>
              <h1>Our Tour Plans</h1>
            </Slide>

            <Slide right>
              <p className="mb-0">
                Here you can find our all Tour Plans. Choose some of them and
                Explore your Travel.
              </p>
            </Slide>
          </div>

          <Container>
            <div className="my-3 d-flex flex-wrap justify-content-between">
              <Row>
                {courses.slice(0, 6)?.map((course) => (
                  <Course key={course.key} course={course} />
                ))}
              </Row>
            </div>
          </Container>
        </div>
        <div
          style={{
            background: `url(${banner4})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            backgroundSize: "cover",
            width: "100%",
            height: "100vh"
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div class="card pt-4 pb-4 ps-2 pe-2 mt-5">
                  <div class="card-body">
                    <h5 class="card-title"><b>Group Travel to New Zealand</b></h5>
                    <span className='text-danger'><b>$150</b></span>
                    <p class="card-text text-secondary">To travel from one place to another for different purposes is generally called travelling. People do not travel always for the same purposes.
                      <br />
                      <br />
                      To travel from one place to another for different purposes is generally called travelling. People do not travel always for the same purposes.
                    </p>
                    <a href="#" class="btn btn-warning">See Details</a>
                  </div>
                </div>
              </div>
              <div className="col-md-8"></div>
            </div>
          </div>
        </div>
        <div className='pt-5 pb-5 bg-dark text-white'>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div>
                  <img className='p-3 bg-white shadow img-fluid' src={about} alt="" />
                </div>
              </div>
              <div className="col-md-6 pt-5 ps-4">
                <h6 className='text-warning'>ABOUT TRAVIO</h6>
                <h1>World Best Travel Agency Company Since 2008.</h1>
                <p className='text-secondary mt-2'> Man is a traveler by nature. He does not like to keep static at a place for a long time. So, people like to visit new places whenever they find time and opportunity. People travel for different purposes. Some travel for getting an education and some travel for pleasure. Many people also travel for business and employment. Travelling is, indeed, very pleasant. It is useful too. By traveling to new places we can know new <br /> people and learn many new things. Travelling opens new vistas of experience and understanding for us. </p>
                <button className='btn btn-warning fs-5 fw-bold px-4 py-2'>Find Tours</button>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            background: `url(${video})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            backgroundSize: "cover",
            width: "100%",
            height: '80vh'
          }}
        >

          <div className="container">
            <div className="row">
              <div className="col-md-6">

              </div>
              <div className="col-md-6">
                <div class="card pt-4 pb-4 ps-2 pe-2 mt-5 bg-dark text-white">
                  <div class="card-body">
                    <h5 class="card-title"><b>Norway Lake</b></h5>
                    <span className='text-danger'><b>$150</b></span>
                    <p class="card-text text-white">To travel from one place to another for different purposes is generally called travelling. People do not travel always for the same purposes.
                      <br />
                      <br />
                      To travel from one place to another for different purposes is generally called travelling. People do not travel always for the same purposes.
                    </p>
                    <a href="#" class="btn btn-warning">See Details</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Home;
