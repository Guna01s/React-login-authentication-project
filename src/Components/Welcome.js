import React, { lazy, useEffect } from "react";
import { Box, Button } from "@mui/material";
import Onepiece from "../Assets/35066.gif";
import Lazy from "../Assets/35056.gif";
import "../Components/signlog.css";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();
  useEffect(() => {
    let userName = sessionStorage.getItem("userName");
    if (userName === "" || userName === null) {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <Box
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          overflow: "hidden",
        }}
      >
        <img
          src={Onepiece}
          alt="Welcome"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div
          style={{
            position: "absolute",
            top: "42%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "#1d023e",
            fontSize: "100px",
            fontWeight: "1000",
            textShadow:
              "0 0 10px #ff0000, 0 0 20px #ff0000, 0 0 30px #ff0000, 0 0 40px #ff0000",
          }}
        >
          Welcome
        </div>
        <div
          style={{
            position: "absolute",
            top: "70%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            borderRadius: "50%",
            overflow: "hidden",
            border: "none",
            width: "200px",
            height: "200px",
            boxShadow: "0 0 20px rgba(255, 255, 255, 1)",
            transition: "transform 0.2s ease",
          }}
          className="hover-animation"
        >
          <img
            src={Lazy}
            alt="Welcome"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "50%",
            }}
          />
        </div>
        <div
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            display: "flex",
            gap: "10px",
          }}
        >
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              navigate("/welcome");
            }}
          >
            Home
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => {
              navigate("/login");
            }}
          >
            Logout
          </Button>
        </div>
      </Box>
    </>
  );
};

export default Welcome;
