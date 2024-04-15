import React from 'react'
import "./style.css";
 import Presentation from "../../Assets/Students.png";
 import ComputerLab from "../../Assets/ComputerLab.png.png";
 const Admission = () => {
  return (
    <div id="Admission" className='container'>


      <div className="description-admission row">
        <div className="admission-left-content col-6">
          <div className="admission-main">Admission Procedure & Apply Now</div>
          <div className="fee-structure">
            For Fee structure and other details contact
            <div>management immediately</div>
          </div>
        </div>
        <div className="admission-right-content col-6">
          SVIS College Admissions for MCA MBA are Starts in July 2023 for new
          batches. Admissions are two types, one is under the convenor quota and
          the second is under Management Quota. APICET Entrance exam takes place
          for convenor quota students every year.
        </div>
      </div>
      <div className="container-course row">
        <div className="college-image-wrapper col">
          <img
            src={Presentation}
            alt="clg-presentation"
            className="college-image"
          />
        </div>
        <div className="container-content col">
          <div className="course-chip">Course</div>
          <div className="course-name">
            MBA - Master of
            <div>Business Administration</div>
          </div>
          
          <div className="course-desc">
            Designed for aspiring professionals and seasoned executives alike,
            our comprehensive curriculum equips you with the knowledge, skills,
            and strategic mindset needed to excel in today's dynamic business
            landscape.
          </div>
          <button className="course-btn">Apply Now</button>
        </div>
        <div className="container-content col">
          <div className="course-chip">Course</div>
          <div className="course-name">
            MCA-Master of
            <div>Computer Applications</div>
          </div>
          
          <div className="course-desc">
            Designed for aspiring professionals and seasoned executives alike,
            our comprehensive curriculum equips you with the knowledge, skills,
            and strategic mindset needed to excel in today's dynamic business
            landscape.
          </div>
          <button className="course-btn">Apply Now</button>
        </div>
        <div className="container-course row">
          <div className="college-image-wrapper col">
            <img
              src={ComputerLab}
              alt="clg-presentation"
              className="college-image"
            />
          </div>
        </div>
      </div>
    </div>
  );

  };
export default Admission;