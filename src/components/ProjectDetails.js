import React from "react";
import { useNavigate } from "react-router-dom";

function ProjectDetails() {
  const navigate = useNavigate();

  const nextPage = () => {
    navigate("/congratulation");
  };

  const backPage = () => {
    navigate("/project-details");
  };

  return (
    <div>
      <div class="project">
        <h2>Enter your project details</h2>
        <div class="projects">
          <div class="title title1">
            {/* <h3 style="display: none" id="phead"></h3> */}
            <input
              type="text"
              id="project-title"
              placeholder="Project Title"
              onkeypress="setProject(event)"
            />
            <div class="project-container">
              <div id="newProject">
                <input type="text" id="" placeholder="Project tasks" />
                <div id="tasks"></div>
                <input
                  type="button"
                  value="ADD NEW"
                  class="send-otp"
                  id="push"
                  onclick="push(event)"
                />
              </div>
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
