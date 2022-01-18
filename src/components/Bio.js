import React from "react";
import { useNavigate } from "react-router-dom";

function Bio() {
  const navigate = useNavigate();
  const nextPage = () => {
    navigate("/upload");
  };

  const backPage = () => {
    navigate("/subcategory");
  };
  return (
    <div>
      <div class="bio">
        <h2>Complete your bio</h2>
        <h3>Note * mark fields are mandatory</h3>
        <div class="bio-form">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="* Name"
            required
          />
          <input
            type="text"
            id="surname"
            name="surname"
            placeholder="* Surname"
            required
          />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email ID - Optional"
            required
          />
          <input
            type="text"
            id="email"
            name="email"
            placeholder="* Mobile No"
            required
          />
          <div class="dropdown">
            <select name="gender" id="gender">
              <option value="javascript">* Gender</option>
              <option value="php">PHP</option>
            </select>
            <select name="gender" id="gender">
              <option value="javascript">* Date of birth</option>
              <option value="php">PHP</option>
            </select>
            <select name="gender" id="gender">
              <option value="javascript">* Graduation</option>
              <option value="php">PHP</option>
            </select>
            <select name="gender" id="gender">
              <option value="* Dropdown">* Masters</option>
              <option value="php">PHP</option>
            </select>
            <select name="gender" id="gender">
              <option value="* Dropdown">* Date of birth</option>
              <option value="php">PHP</option>
            </select>
            <select name="gender" id="gender">
              <option value="* Dropdown">* Designation</option>
              <option value="php">PHP</option>
            </select>
          </div>
          <div class="heading">
            <h4>* Company Details</h4>
            <div class="dropdown">
              <select name="gender" class="drop-selec">
                <option value="* Dropdown">Apple</option>
                <option value="php">PHP</option>
              </select>
              <select name="gender" class="drop-selec">
                <option value="* Dropdown">Accenture</option>
                <option value="php">PHP</option>
              </select>
              <select name="gender" class="drop-selec">
                <option value="* Dropdown">Microsoft</option>
                <option value="php">PHP</option>
              </select>
              <select name="gender" class="drop-selec">
                <option value="* Dropdown">Google</option>
                <option value="php">PHP</option>
              </select>
            </div>
          </div>
          <div class="dropdown com">
            <select name="gender" id="gender">
              <option value="javascript">* Gender</option>
              <option value="php">PHP</option>
            </select>
            <select name="gender" id="gender">
              <option value="javascript">* Age</option>
              <option value="php">PHP</option>
            </select>
          </div>
          <p>Communication address</p>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="House / Flat / Apartment Name"
            required
          />
          <input
            type="text"
            id="surname"
            name="surname"
            placeholder="Street / Landmark"
            required
          />
          <input
            type="text"
            id="surname"
            name="surname"
            placeholder="Colony name"
            required
          />
          <input
            type="text"
            id="surname"
            name="surname"
            placeholder="Near by landmark"
            required
          />
          <input
            type="text"
            id="surname"
            name="surname"
            placeholder="Pin"
            required
          />
          <div class="dropdown">
            <select name="gender" id="gender">
              <option value="javascript">City</option>
              <option value="php">City</option>
            </select>
            <select name="gender" id="gender">
              <option value="javascript">State</option>
              <option value="php">State</option>
            </select>
          </div>
        </div>
        <div class="buttons2">
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

export default Bio;
