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
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarText"
        >
          <div className="d-flex aling-items-center">
            <div className="my-auto">
              <div>
                <Lottie options={defaultOptions} height={50} width={50} />
              </div>
            </div>
            <h1 id="title">Peliculas</h1>
          </div>
          <div className="d-flex aling-items-center justify-content-end">
            <div className="d-flex aling-items-center px-2 py-2">
              <SearchBar />
            </div>
            <div className="d-flex aling-items-center px-2 py-2">
              <Gender data={data?.genres.map((item) => item.name)} />
            </div>
            <div className="d-flex aling-items-center px-2 py-2">
              <OrderBy />
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex aling-items-center px-2 py-2">
        <ToggleDarkMode />
      </div>
    </nav>
  );
};

export default NavBar;
