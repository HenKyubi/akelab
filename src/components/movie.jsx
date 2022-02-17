import React from "react";
import PropTypes from "prop-types";

const Movie = ({
  title,
  imgURL,
  imgAlt,
  description,
  vote_average,
  release_date,
}) => {
  return (
    <div className="col-12 col-md-4">
      <div className="movie-card">
        <h2 className="">{title}</h2>
        <div className="row">
          <div className="col-12 col-md-5">
            <img className="img-fluid" src={imgURL} alt={imgAlt} />
          </div>
          <div className="col-12 col-md-7">
            <sumary className="movie-description">{description}</sumary>
            <div className="col-12">
              <div>
                <h6>Título: </h6>
                <p>{title}</p>
              </div>
              <div>
                <h6>Calificación: </h6>
                <p>{vote_average}</p>
              </div>
              <div>
                <h6>Genero: </h6>
              </div>
              <div>
                <h6>Fecha de realización: </h6>
                <p>{release_date}</p>
              </div>
            </div>
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
  vote_average: PropTypes.number.isRequired,
  release_date: PropTypes.string.isRequired,
};

export default Movie;
