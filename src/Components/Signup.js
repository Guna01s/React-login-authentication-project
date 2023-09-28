import React, { useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import PasswordIcon from "@mui/icons-material/Password";
import { Link, useNavigate } from "react-router-dom";
import "../Components/signlog.css";

const Signup = () => {
  // State to store user input values
  const [formData, setFormData] = useState({
    userName: "",
    mail: "",
    password: "",
  });

  // State to manage form validation errors
  const [formErrors, setFormErrors] = useState({});
  const navigate = useNavigate();

  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm(formData);

    if (Object.keys(errors).length === 0) {
      try {
        // Send a POST request to the server to create a new user
        const response = await fetch("http://localhost:7000/users", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          // If the signup is successful, show an alert and navigate to the login page
          alert("Signed Up Successfully");
          navigate("/login");
        } else {
          console.error("Error during signup:", response.statusText);
        }
      } catch (err) {
        console.error("Error during signup:", err.message);
      }
    } else {
      // If there are validation errors, set them in the state
      setFormErrors(errors);
    }
  };

  // Function to validate form input
  const validateForm = (data) => {
    let errors = {};

    if (!data.userName.trim()) {
      errors.userName = "Username is required";
    }

    if (!data.mail.trim()) {
      errors.mail = "Email is required";
    } else if (!isValidEmail(data.mail)) {
      errors.mail = "Invalid email address";
    }

    if (!data.password.trim()) {
      errors.password = "Password is required";
    } else if (data.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }

    return errors;
  };

  // Function to check if an email is valid
  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
    <form className="container" onSubmit={handleSubmit}>
      <div className="header">
        <div className="text">Signup</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <div className="icon">
            <PersonIcon />
          </div>
          <input
            required
            name="userName"
            value={formData.userName}
            type="text"
            onChange={handleChange}
            placeholder="User Name"
          />
          {formErrors.userName && (
            <div className="error">{formErrors.userName}</div>
          )}
        </div>

        <div className="input">
          <div className="icon">
            <EmailIcon />
          </div>
          <input
            required
            name="mail"
            value={formData.mail}
            type="email"
            onChange={handleChange}
            placeholder="Mail"
          />
          {formErrors.mail && <div className="error">{formErrors.mail}</div>}
        </div>

        <div className="input">
          <div className="icon">
            <PasswordIcon />
          </div>
          <input
            required
            name="password"
            value={formData.password}
            type="password"
            onChange={handleChange}
            placeholder="Password"
          />
          {formErrors.password && (
            <div className="error">{formErrors.password}</div>
          )}
        </div>
      </div>

      {/* Signup and Login buttons */}
      <div className="submit-container">
        <button className="submit a">Sign Up</button>
        <Link to="/login" style={{ textDecoration: "none" }}>
          <button className="submit b">Login</button>
        </Link>
      </div>
    </form>
  );
};

export default Signup;
