import React from "react";

import back from "../../../assets/images/bg.png";

import "./index.scss";

const Header = () => {
  return (
    <>
      <section className="solution_header">
        <h1>Providing Simple Solutions</h1>
        <p className="h2">To Complex Problems</p>
        <p className="solution_text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi
          deleniti asperiores quae reiciendis blanditiis laborum, enim voluptas
        </p>
        <div className="get-started">
          <button>Get Started</button>
        </div>
        <img src={back} className="header_image" />
      </section>
    </>
  );
};

export default Header;
