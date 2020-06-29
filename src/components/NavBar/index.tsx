import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import { useSelector } from "react-redux";

import Logo from "../../assets/images/logo.png";

import Button from "../Button";

import "./index.scss";
const Navbar = (props: any) => {
  const { isAuth } = useSelector((state: any) => state.auth);
  let link;
  let text;
  if (isAuth) {
    link = "/dashboard/overview";
    text = "My Dashboard";
  } else {
    link = "/auth/login";
    text = "Log In";
  }
  return (
    <>
      <nav className="nav">
        <div
          className="logo"
          onClick={() => {
            props.history.push("/");
          }}
        >
          <img src={Logo} alt="Mathematics_logo" />
        </div>
        <div className="nav_items">
          <div className="nav_item">
            <NavLink exact to="/">
              Home <span className="circle"></span>
            </NavLink>
          </div>
          <div className="nav_item">
            <NavLink to="/blog">
              Blog<span className="circle"></span>
            </NavLink>
          </div>
          <div className="auth">
            <button
              onClick={() => {
                props.history.push(link);
              }}
            >
              <NavLink to={link}>{text}</NavLink>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default withRouter(Navbar);
