import React from "react";
import { useNavigate } from "react-router-dom";

function Category() {
  const navigate = useNavigate();

  const nextPage = () => {
    navigate("/verify");
  };

  const backPage = () => {
    navigate("/subcategory");
  };

  return (
    <div>
      <div class="category">
        <h2>Choose a category</h2>
        <div class="container">
          <div class="row1">
            <label class="card">
              <input type="radio" name="category" value="Developer" />
              <img src="./images/category/004-web-development.png" alt="" />
              <h3>Developer</h3>
            </label>
            <label class="card">
              <input type="radio" name="category" value="Designer" />
              <img src="./images/category/005-graphic-designer.jpg" alt="" />
              <h3>Designer</h3>
            </label>
            <label class="card">
              <input type="radio" name="category" value="Testing" />
              <img src="./images/category/003-search.png" alt="sample" />
              <h3>Testing</h3>
            </label>
            <label class="card">
              <input type="radio" name="category" value="Marketing" />
              <img src="./images/category/002-profit.png" alt="sample" />
              <h3>Marketing</h3>
            </label>
          </div>
          <div class="row2">
            <label class="card">
              <input type="radio" name="category" value="Recruitment" />
              <img src="./images/category/007-hr.png" alt="sample" />
              <h3>Recruitment</h3>
            </label>
            <label class="card">
              <input type="radio" name="category" value="Sales" />
              <img src="./images/category/008-acquisition.png" alt="sample" />
              <h3>Sales</h3>
            </label>
            <label class="card">
              <input type="radio" name="category" value="Accountant" />
              <img src="./images/category/001-accounts.png" alt="sample" />
              <h3>Accountant</h3>
            </label>
            <label class="card">
              <input type="radio" name="category" value="Other" />
              <img src="./images/category/006-analyst.png" alt="sample" />
              <h3>Other</h3>
            </label>
          </div>
        </div>
        <input
          type="submit"
          class="send-otp back"
          value="BACK"
          onClick={nextPage}
        />
        <input
          type="submit"
          class="send-otp next"
          value="NEXT"
          onClick={backPage}
        />
      </div>
    </div>
  );
}

export default Category;
