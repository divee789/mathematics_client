import React from "react";

import NavBar from "../../components/NavBar";
import Header from "../../components/Landing/Header";
import Process from "../../components/Landing/Process";
import Leadership from "../../components/Landing/Staff";
import "./index.scss";

const Home = () => {
  return (
    <>
      <NavBar />
      <Header />
      <Process />
      <Leadership />
    </>
  );
};

export default Home;
