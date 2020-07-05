import React, { Component } from "react";
import { Helmet } from 'react-helmet';
import hostbackground from "../photos/hostbackground.jpg";
import "./hostExperience.css";
import Navbar from "../components/Navbar";
import Bottom from "../components/Bottom";
import FooterPage from "../components/Footer";
import chef from "../photos/chef.jpg";
import woman from "../photos/woman.jpg";
import faces from "../photos/Faces.png";
import kaixin from "../photos/kaixin.jpg";
import fquote from "../photos/fquote.png";
import quotes from "../photos/quotes.png";
import bquote from "../photos/bquote.png";

class HostExperience extends React.Component {
  render() {
    return (
      <div className="container-fluid app p-0 m-0">

        <Helmet>
            <title>Host an experience | YoloShadow</title>
        </Helmet>

        <div className="nav">
          <Navbar textColor={"black"}  />
        </div>
        <div className="p-3">
              <div className="row align-items-center experience-fig1">
                <h2 className="col">Host an Experience</h2>
              </div>
              <br />
              <br />
              <br />
              <div>
                <div className="row align-items-center">
                  <figure>
                    <div className="col-md-10 align-self-start">
                      <h5 className="here10"> HERE WE GO</h5>
                      <h3 className="whyHost">Why Host</h3>

                      <button className="applyNow-1">
                        <a href="/hostregister">Apply Now</a>
                      </button>
                      <button className="applyNow-1">
                        <a href="/hostguidelines">Host Guidelines</a>
                      </button>
                    </div>
                  </figure>
                </div>
              </div>

              <div className="container-fluid">
                <div className="row">
                  <div className="fig10 col-md-5 align-self-end row">
                    <div className="insider row">
                      <div className="container  align-self-center">
                        <h5>Demonstrate your values</h5>
                        <p>
                          Show your openness, dedication to diversity & inclusion, and
                          willingness to give back.
                        </p>
                        <h5>Get a new perspective</h5>
                        <p>
                          Infuse your business with a different point of view and
                          innovative ideas.
                        </p>
                        <h5>Grow your brand Bring </h5>
                        <p>
                          people along on your business journey and create a community
                          of fans and advocates and get rewarded for it.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 align-self-center">
                    <img
                      src={chef}
                      alt="photo of a smiling chef"
                      className="chefimage"
                    />
                  </div>
                  <div className="col-md-1 quoteContainer">
                    <div className="quotes d-flex flex-column">
                      <img className="mt-5" src={fquote} alt="" />
                      <br />
                      <p style={{ width: "50%" }}>
                        YOLOers really inspire me! I’ve got different points of view
                        on the work I do.
                      </p>{" "}
                      <br />
                      <img src={bquote} alt="" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="container-md-fluid d-flex justify-content-end row mb-10">
                <div className="container-sm d-flex flex-column align-items-end mt-5 mb-5">
                  <figure className="col align-self-end">
                    <h5 className="here20"> HERE WE GO</h5>
                    <h3 className="howTo">How to Become a Host</h3>
                    <a href="/hostregister">
                      <button className="applyNow-2">
                        Apply Now
                      </button>
                    </a>
                    <a href="/hostguidelines">
                      <button className="applyNow-2">
                       Host Guidelines
                      </button>
                    </a>
                  </figure>
                </div>
                <div className="container-fluid row">
                  <div className="woman-smiling col-sm-3 align-self-center">
                    <img src={woman} alt="photo of a smiling woman" />
                  </div>
                  <div className="quote1 col-md-3 align-items-end">
                    <div className="quote1Inside d-flex flex-column align-items-center">
                      <img className="mb-5 mt-5" src={fquote} alt="" />
                      <p className="d-flex align-items-center mb-5">
                        It means a lot to me to share my insights on my job with young
                        talents.
                      </p>{" "}
                      <img src={bquote} alt="" />
                    </div>
                  </div>

                  <figure className="fig20 col-md-4">
                    <h5>① Apply to host Express</h5>
                    <p>
                      your interest through a simple form. It’s less about what you do
                      and more about how passionate you are about sharing your mission
                      with others.
                    </p>
                    <h5>② Create your profile</h5>
                    <p>
                      Once our team reviews and approves your application, you will be
                      invited to set set up your host profile.
                    </p>
                    <h5>③ Start hosting</h5>
                    <p>
                      Once your profile is live, shadowers will be able to browse and
                      request to book your experience immediately.
                    </p>
                  </figure>
                </div>
              </div>
              <div>
                <Bottom />
              </div>
        </div>

        <div className="footerpages p-0 m-0">
          <FooterPage />
        </div>
      </div>
    );
  }
}

export default HostExperience;