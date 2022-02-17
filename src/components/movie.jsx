import React from "react";
import PropTypes from "prop-types";

const Movie = ({ title, imgURL, imgAlt, description }) => {
  return (
    <div className="col-12 col-md-4">
      <div className="movie-card">
        <h2 className="">{title}</h2>
        <div className="row">
          <div className="col-12 col-md-5">
            <img className="img-fluid" src={imgURL} alt={imgAlt} />
          </div>
          <div className="col-12 col-md-7">
            <p className="movie-description">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  imgURL: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Movie;
