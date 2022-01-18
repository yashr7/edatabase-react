import { Close, KeyboardArrowUp } from "@mui/icons-material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ProjectDetails() {
  const navigate = useNavigate();
  const nextPage = () => {
    navigate("/congratulation");
  };
  const backPage = () => {
    navigate("/upload");
  };

  const companies = ["c1", "c2", "c3"];

  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState([]);
  const addItem = () => {
    if (!inputData) {
    } else {
      setItems([...items, inputData]);
      setInputData("");
    }
  };
  const deleteItem = (id) => {
    const updateditems = items.filter((elem, ind) => {
      return ind !== id;
    });
    setItems(updateditems);
  };

  return (
    <div>
      <div class="project">
        <h2>Enter your project details</h2>
        <div class="projects">
          {companies.map((item) => {
            return (
              <div className="project-card">
                <div className="company">
                  <div className="box"></div>
                  <span className="chead">{item}</span>
                  <button className="upicon">
                    <KeyboardArrowUp />
                  </button>
                </div>
                <div className="project-list">
                  {items.map((elem, ind) => {
                    return (
                      <div className="list-item" key={ind}>
                        <li>{elem}</li>
                        <button
                          className="closeIcon"
                          onClick={() => deleteItem(ind)}
                        >
                          <Close fontSize="smaller" />
                        </button>
                      </div>
                    );
                  })}
                </div>
                <div className="add-div">
                  <input
                    className="add-input"
                    type="text"
                    placeholder="Enter Project Title"
                    value={inputData}
                    onChange={(e) => setInputData(e.target.value)}
                  />
                  <button className="add-new" onClick={addItem}>
                    ADD NEW
                  </button>
                </div>
              </div>
            );
          })}

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
