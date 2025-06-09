import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/landingPage.css";
import backgroundImage from "../../public/background.png";

const landing = () => {
  const navigate = useNavigate();
  return (
    <div
      className="landingPage"
      style={{
        width: "100vw",
        height: "100vh",
        backgroundImage: backgroundImage,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        color: "white",
        fontFamily: "Roboto, sans-serif",
      }}
    >
      <nav>
        <div className="left">
          <h2>ConnectMeet</h2>
        </div>

        <div className="right">
          <div
            className="join-as-guest"
            onClick={() => navigate(`/bvtg`)}
            role="button"
          >
            <p>Join as Guest</p>
          </div>
          <div
            className="register"
            onClick={() => navigate(`/auth`)}
            role="button"
          >
            <p>Register</p>
          </div>
          <div
            className="login"
            onClick={() => navigate(`/auth`)}
            role="button"
          >
            <p>Login</p>
          </div>
        </div>
      </nav>

      <div className="main-body">
        <div className="desc">
          <h1>
            <span style={{ color: "#FF9839" }}>Connect</span> with your Loved
            Ones
          </h1>
          <p>Cover a distance by ConnectMeet</p>
          <div
            className="get-started"
            onClick={() => navigate(`/auth`)}
            role="button"
          >
            <p>Get Started</p>
          </div>
        </div>

        <div>
          <img src="./mobile.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default landing;
