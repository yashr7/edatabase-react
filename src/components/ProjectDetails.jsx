import { Close, KeyboardArrowUp } from "@mui/icons-material";
import React from "react";
import { useNavigate } from "react-router-dom";

function ProjectDetails() {
  const navigate = useNavigate();
  const nextPage = () => {
    navigate("/congratulation");
  };
  const backPage = () => {
    navigate("/uploads");
  };
  return (
    <div>
      <div class="project">
        <h2>Enter your project details</h2>
        <div class="projects">
          <div className="project-card">
            <div className="company">
              <div className="box"></div>
              <span className="chead">Accenture Projects</span>
              <button className="upicon">
                <KeyboardArrowUp />
              </button>
            </div>
            <div className="project-list">
              <ul>
                <div className="list-item">
                  <li>Project Title</li>
                  <button className="closeIcon">
                    <Close fontSize="smaller" />
                  </button>
                </div>
                <div className="list-item">
                  <li>Project Title</li>
                  <button className="closeIcon">
                    <Close fontSize="smaller" />
                  </button>
                </div>
                <div className="list-item">
                  <li>Project Title</li>
                  <button className="closeIcon">
                    <Close fontSize="smaller" />
                  </button>
                </div>
              </ul>
            </div>
            <div className="add-btn">
              <button className="add-new">ADD NEW</button>
            </div>
          </div>

          <div class="buttons btnp">
            <input
              type="submit"
              class="send-otp back"
              value="BACK"
              onClick={backPage}
            />
            <input
              type="submit"
              class="send-otp next"
              value="NEXT"
              onClick={nextPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
