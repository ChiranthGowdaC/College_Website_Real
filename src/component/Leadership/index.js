import React from "react";
import "./style.css";

const Leadership = () => {
  return (
    <div id="Leadership" className="container">
      <div className="description-leadership row">
        <div className="leadership-left-content col-3">Our Leadership</div>
        <div className="leadership-right-content col-9">
          Leaders have a clear and compelling vision that serves as a guiding
          light for their team or organization. They articulate this vision,
          motivating others to work towards its realization. Effective leaders
          demonstrate strong character, integrity, and a genuine concern for the
          well-being and success of their team members.
        </div>
      </div>
      <div className="leaders-logo">
        <div className="card-wrapper">
          <div>
            <div className="Boss"></div>
            <h4>Sir B.C Vannappa</h4>
            <p>President</p>
            <p>Rtd Employee, Health Dept</p>
          </div>
          <div className="Boss">
            <h4>Alivelu Yatish Babu</h4>
            <p>Vice Chairman</p>
          </div>
          <div className="Boss">
            <h4>Sir B Omkarappa</h4>
            <p>Correspondent</p>
          </div>
          <div className="Boss">
            <h4>Sir B Omkarappa</h4>
            <p>Correspondent</p>
          </div>
          <div className="Boss">
            <h4>Sir B Omkarappa</h4>
            <p>Correspondent</p>
          </div>
        </div>
      </div>
      <button
        className="leadership-action"
        style={{ backgroundcolor: "#fff", color: "#F37337" }}
      >
        Read More
      </button>
    </div>
  );
};

export default Leadership;