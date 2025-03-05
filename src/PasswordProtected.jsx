import { useState } from "react";
import "./password.css";
import { TextFade } from "./Components/TextFade";

const PasswordProtectedPage = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const correctPassword = "ripple";

  const validatePassword = (event) => {
    event.preventDefault();
    if (password === correctPassword) {
      window.location.href = "/bpProject";
    } else {
      setError("Invalid password! Please try again.");
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
  
      {/* Image below the login container */}
      <img src="/assets/4k.png" alt="Image" className="login-image" />
  
    </div>
  );
  
};

export default PasswordProtectedPage;