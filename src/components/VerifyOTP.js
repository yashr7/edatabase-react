import React from "react";
import { useNavigate } from "react-router-dom";

function VerifyOTP() {
  const navigate = useNavigate();

  const nextPage = () => {
    navigate("/category");
  };

  const backPage = () => {
    navigate("/verify");
  };

  return (
    <div>
      <div
        class="otp-verify"
        // style={{ display: 'none'}}
      >
        <h2>
          OTP has been sent successfully to +91-99******88 <br />
          Please enter the same OTP below.
        </h2>
        <div class="input-container">
          <input type="text" id="otp-box1" maxlength="1" placeholder="*" />
          <input type="text" class="otp-box" maxlength="1" placeholder="*" />
          <input type="text" class="otp-box" maxlength="1" placeholder="*" />
          <input type="text" class="otp-box" maxlength="1" placeholder="*" />
          <input type="text" id="otp-box2" maxlength="1" placeholder="*" />
        </div>
        <input
          type="submit"
          class="send-otp2"
          value="VERIFY OTP"
          onClick={nextPage}
        />
        <input
          type="submit"
          class="send-otp resend-otp"
          value="Resend OTP in 00:40"
          onClick={backPage}
        />
        <h3>
          Already User? <a href="/">SignIn Now</a>
        </h3>
      </div>
    </div>
  );
}

export default VerifyOTP;
