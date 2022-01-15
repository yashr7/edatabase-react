import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function VerifyOTP() {
  const navigate = useNavigate();

  const nextPage = () => {
    navigate("/category");
  };

  const backPage = () => {
    navigate("/verify");
  };

  const [otp, setOtp] = useState(new Array(5).fill(""));

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;
    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    //Focus next input
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };
  return (
    <div>
      <div class="otp-verify">
        <h2>
          OTP has been sent successfully to +91-99******88 <br />
          Please enter the same OTP below.
        </h2>

        <div className="input-container">
          {otp.map((data, index) => {
            return (
              <input
                type="text"
                className="otp-field"
                name="otp"
                maxlength="1"
                placeholder="*"
                key={index}
                value={data}
                onChange={(e) => handleChange(e.target, index)}
                onFocus={(e) => e.target.select}
              />
            );
          })}
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
