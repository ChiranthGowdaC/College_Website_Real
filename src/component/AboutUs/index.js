import React from "react";
import OpenZeppelin from "../../Assets/openzippen.png";
import oracle from "../../Assets/oracle.png";
import morpheus from "../../Assets/Morpheus.png";
import samsung from "../../Assets/Samsung.png";
import mondayCom from "../../Assets/monday.png";
import segment from "../../Assets/Segment.png";
import spyglass from "../../Assets/spyglass.png";
import target from "../../Assets/target.png";
import "./style.css";


const Aboutus = () => {
  return (
    <div id="About-us" className="container">
      <div className="about-us-content">
        <p className="about-us-content-paragraph">
          Your Gateway to Exclusive Opportunities and Career Advancement.
        </p>
        <div className="about-us-content-images">
          <img className="logo-image" src={OpenZeppelin} alt="openzeppelin" />
          <img className="logo-image" src={oracle} alt="oracle" />
          <img className="logo-image" src={morpheus} alt="morpheus" />
          <img className="logo-image" src={samsung} alt="samsung" />
          <img className="logo-image" src={mondayCom} alt="monday.com" />
          <img className="logo-image" src={segment} alt="segment" />
        </div>
        <div className="description row">
          <div className="aboutus-left-section-content col-2">
            About Institute
          </div>
          <div className="aboutus-right-section-content col-10">
            Established in the year 2010, the SHREE VIVEKANANDA INSTITUTE OF
            SCIENCE (SVIS), located in Guntakal, Andhra Pradesh provides the
            best-in-the-class Post Graduation education in Computer Science and
            Business Administration namely MCA & MBA respectively to help
            students hone their analytical and reasoning abilities and develop
            their professional skills. SVIS meets the growing need for the
            technology professionals by nurturing young talent in an innovative
            and progressive learning environment. SVIS is AICTE approved since
            inception.
            <div className="content">
              SVIS Fraternity is dedicated to fulfilling Dr. R.Manjunatha dreams
              of providing a high degree of educational services. SVIS is
              committed to promote quality education for the growth and
              development of the society and country.
            </div>
          </div>
        </div>
        <div className="mid-content-wrapper"></div>
        <div className="mid-quote-content">
          <span className="quotes">"</span>
          Entrepreneurship and increase global competencies among students.
          <span className="quotes">"</span>
        </div>
        <div className="vision-mission row flex-nowrap">
          <div className="col-6">
            <div className="left-vision-content">
            <div className="sub-heading-wrapper">
              <div className="sub-heading">
                <img className="logo-symbol" src={spyglass} alt="spyglass" />
                Our Vision
              </div>
              <div className="content">
                To provide relevant education which generates man power of
                highest academic excellence and shaping through holistic and
                integrated of highest quality.
              </div>
              <div className="content">
                To build leaders andentrepreneurs of world class excellence
                through holistic, adroitness and innovative education.
              </div>
              <div className="content">
                To provide Quality of Education Imparted and Turning out High
                Quality Professionals with Balanced and Globally Competitive
                Personality
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="right-mission-content">
              <div className="sub-heading">
                <img className="logo-symbol" src={target} alt="target" />
                Our Misson
              </div>
              <div className="content">
                To Impart professionalism with knowledge synthesis through
                quality, innovative and State-of-art educational initiatives of
                academic excellence as per fast-evolving Global Scenario with
                integrity , ethical standards and high degree of credibility.
              </div>
              <div className="content">
                To contribute towards knowledge generation and dissemination by
                ethical and value-based learning which nurture creativity,
                encourage entrepreneurship and increase global competencies
                among students.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div></div>
  );
};

export default Aboutus;