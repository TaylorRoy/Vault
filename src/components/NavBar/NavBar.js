import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => (
  <div> 
  <header className="header-title">
    <h1>Password Manager</h1>
  </header>
  <ul className="nav nav-tabs">
  <li className="nav-item">
    <NavLink
      to="/login"
      activeStyle={{color:"red"}}
      className={
        window.location.pathname === "/" ? "nav-link active" : "nav-link"
      }
    >
      Login
    </NavLink>
  </li>
  <li className="nav-item">
    <NavLink
      to="/newpassword"
      activeStyle={{color:"red"}}
      className={
        window.location.pathname === "/newpassword" ? "nav-link active" : "nav-link"
      }
    >
      Enter New Password
    </NavLink>
  </li>
  <li className="nav-item">
    <NavLink
      to="/list"
      activeStyle={{color:"red"}}
      className={
        window.location.pathname === "/blog" ? "nav-link active" : "nav-link"
      }
    >
      List
    </NavLink>
  </li>
  <li className="nav-item">
    <NavLink
      to={"/about"}
      activeStyle={{color:"red"}}
      className={
        window.location.pathname === "/contact" ? "nav-link active" : "nav-link"
      }
    >
      About
    </NavLink>
  </li>

</ul>
</div>
);

export default NavBar;