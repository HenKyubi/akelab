import React from "react";
import Lottie from "react-lottie";
import animationData from "../assets/lotties/movie-cut.json";

//Components
import SearchBar from "./searchbar";
import Gender from "./gender";
import ToggleDarkMode from "./toggle-dark-mode";
import OrderBy from "./order-by";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const NavBar = ({ data }) => {
  return (
    <nav id="navBar" className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <div className="d-flex">
          <div>
            <Lottie options={defaultOptions} height={50} width={50} />
          </div>
          <h1>Peliculas</h1>
        </div>
        <SearchBar />
        <Gender data={data?.genres.map((item) => item.name)} />
        <OrderBy />
        <ToggleDarkMode />
      </div>
    </nav>
  );
};

export default NavBar;
