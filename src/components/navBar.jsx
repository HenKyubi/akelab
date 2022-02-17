import React from "react";
import Lottie from "react-lottie";
import animationData from "../assets/lotties/movie-cut.json";
// import SearchBar from "./searchbar";
import Gender from "./gender";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const NavBar = () => {
  return (
    <nav id="navBar" className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <div className="d-flex">
          <div>
            <Lottie options={defaultOptions} height={50} width={50} />
          </div>
          <h1>Peliculas</h1>
        </div>
        <Gender />
        <input type="text" />
        <a href="">filtro</a>
        <a href="">ordenar</a>
        {/* <SearchBar /> */}
      </div>
    </nav>
  );
};

export default NavBar;
