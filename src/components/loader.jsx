import React from "react";

//Lotties
import Lottie from "react-lottie";
import animationData from "../assets/lotties/movies-title-animation.json";

const defaultOptions = {
  loop: false,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const Loader = () => {
  return (
    <>
      <div
        id="loader"
        className="d-flex align-items-center justify-content-center"
      >
        <div>
          <Lottie options={defaultOptions} />
        </div>
      </div>
    </>
  );
};

export default Loader;
