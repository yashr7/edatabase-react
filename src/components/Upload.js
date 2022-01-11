import React from "react";
import { useNavigate } from "react-router-dom";

function Upload() {
  const navigate = useNavigate();

  const nextPage = () => {
    navigate("/project-details");
  };

  const backPage = () => {
    navigate("/bio");
  };

  return (
    <div>
      <div class="upload">
        <h2>Upload your photos</h2>
        <div class="form">
          <div class="grid">
            <div class="form-element">
              <input type="file" id="file-0" accept="image/*" />
              <label for="file-0" id="file-0-preview">
                <img src="https://bit.ly/3ubuq5o" alt="" />
                <div>
                  <span>+</span>
                </div>
              </label>
            </div>
            <div class="form-element">
              <input type="file" id="file-1" accept="image/*" />
              <label for="file-1" id="file-1-preview">
                <img src="https://bit.ly/3ubuq5o" alt="" />
                <div>
                  <span>+</span>
                </div>
              </label>
            </div>
            <div class="form-element">
              <input type="file" id="file-2" accept="image/*" />
              <label for="file-2" id="file-2-preview">
                <img src="https://bit.ly/3ubuq5o" alt="" />
                <div>
                  <span>+</span>
                </div>
              </label>
            </div>
            <div class="form-element">
              <input type="file" id="file-3" accept="image/*" />
              <label for="file-3" id="file-3-preview">
                <img src="https://bit.ly/3ubuq5o" alt="" />
                <div>
                  <span>+</span>
                </div>
              </label>
            </div>
          </div>
        </div>
        <div class="buttons">
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
  );
}

export default Upload;
