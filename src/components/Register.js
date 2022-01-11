// import axios from 'axios';
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register(props) {
  const [phone, setPhone] = useState("");
  console.log(`phone`, phone);
  const navigate = useNavigate();
  const generateCode = async (e) => {
    e.preventDefault();
    navigate("/verify");
  };
  return (
    <div class="otp-container" style={{ display: "grid" }}>
      <h2>Create your free account now</h2>
      <form class="otp-form" action="">
        <label for="email"></label>
        <input
          type="text"
          id="email"
          name="email"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Email or Mobile"
        />
        {/* <Link to="/verify"> */}
        <input
          type="submit"
          class="send-otp"
          value="SEND OTP"
          onClick={generateCode}
        />
        {/* </Link> */}
      </form>
      <h3>
        Already User? <a href="/">SignIn Now</a>
      </h3>
    </div>
  );
}

export default Register;
