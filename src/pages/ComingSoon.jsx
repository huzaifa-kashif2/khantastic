import React from "react";
import "../styles/ComingSoon.css";
import logo from "../assets/logo.jpeg";

export default function ComingSoon() {
  return (
    <div className="coming-soon-page">
      <div className="content">
        <img
          src={logo}
          alt="Khantastic Logo"
          className="logo"
        />
        <h1 className="title">Khantastic Ventures</h1>
        <p className="subtitle">Something amazing is coming soon!</p>
        <p className="pulse">⏳ Stay tuned...</p>
      </div>
    </div>
  );
}
