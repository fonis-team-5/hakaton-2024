import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/");
  };

  const handleRewardsClick = () => {
    navigate("/rewards");
  };

  return (
    <div className="navbar">
      <div className="left">
        <h3>CaringCoin </h3>
        <p onClick={handleHomeClick}> Home </p>
        <p onClick={handleRewardsClick}> Rewards </p>
      </div>
      <div className="right">
        <p>Log in / Sign up</p>
      </div>
    </div>
  );
}

export default Navbar;
