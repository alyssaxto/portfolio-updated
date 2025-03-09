import React, { useState } from "react";
import "./password.css";
import { TextFade } from "./Components/TextFade";
import axios from "axios";

const PasswordProtectedPage = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const validatePassword = async (event) => {
    event.preventDefault();
    console.log("Password entered:", password);
    console.log("Page name being sent:", "bpProject"); //or whatever pagename you are using.
    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/api/validate_password",
        { password: password, page_name: "bpProject" }
      );
      console.log("API response:", response);

      if (response.data.valid) {
        window.location.href = "/bpProject";
      } else {
        setError(response.data.error || "Invalid password");
        setPassword("");
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
      console.error("Password validation error:", error);
      setPassword("");
    }
  };

  return (
    <div className="Password" id="Password">
      <TextFade direction="up">
        <h1>What's the secret password?</h1>
        <div className="Subtitle">
          <p>Email me at alyssaxto@gmail.com for the password!</p>
        </div>
      </TextFade>

      <div className="login-container">
        <form onSubmit={validatePassword}>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password to Proceed"
            required
          />
          <button type="submit">Submit</button>
        </form>
        {error && <p className="error-message">{error}</p>}
      </div>

      <img src="/assets/4k.png" alt="Image" className="login-image" />
    </div>
  );
};

export default PasswordProtectedPage;