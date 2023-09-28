import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import PasswordIcon from "@mui/icons-material/Password";
import "../Components/signlog.css";

function Login() {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    sessionStorage.clear();
  }, []);

  const linkStyle = {
    textDecoration: "none",
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    // Fetch user data from your JSON file or server
    try {
      const response = await fetch("http://localhost:7000/users");
      const data = await response.json();
      const users = data;

      // Check if the username and password match any user
      const user = users.find(
        (user) => user.userName === userName && user.password === password
      );

      if (user) {
        // Successful login, redirect to the dashboard
        sessionStorage.setItem("userName", userName);
        navigate("/welcome");
      } else {
        // Invalid credentials, show an error message
        alert("Wrong username or password");
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">Login</div>
        <div className="underline"></div>
      </div>
      <form onSubmit={handleLogin}>
        <div className="inputs">
          <div className="input">
            <div className="icon">
              <PersonIcon />
            </div>
            <input
              type="text"
              name="username"
              placeholder="User Name"
              value={userName}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input">
            <div className="icon">
              <PasswordIcon />
            </div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="forgot-password">
          Lost Password?<span>Click Here!</span>
        </div>
        <div className="submit-container">
          <Link to="/signup" style={linkStyle}>
            <button type="button" className="submit b">
              Sign Up
            </button>
          </Link>
          <button type="submit" className="submit a">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
