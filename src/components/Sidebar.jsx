import React from "react";
import "./Sidebar.css";
import Logo from "../imgs/logo.png";

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <div className="logo">
        <img src={Logo} alt="" />
        <span>
          sh<span>o</span>ps
        </span>
      </div>
      <div className="menu">
        <div className="menuItem">
          <div>Icon</div>
          <span>Dashboard</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
