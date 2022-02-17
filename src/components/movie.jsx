import React from "react";
import PropTypes from "prop-types";

const Movie = ({
  title,
  imgURL,
  imgAlt,
  description,
  vote_average,
  gender = [],
  release_date,
}) => {
  const longDateToYear = (date = "") => {
    return date.slice(0, 4);
  };
  const startRate = (rate = 8.4) => {
    rate = Math.trunc(rate / 2);
    let stars = [];
    for (let i = 0; i < rate; i++) {
      stars.push("star-full");
    }
    for (let i = 0; i < 5 - rate; i++) {
      stars.push("star-void");
    }
    return stars;
  };
  return (
    <div className="col-12 col-md-4">
      <div className="movie-card">
        <h2 className="">{`${title} (${longDateToYear(release_date)})`}</h2>
        <div className="row">
          <div className="col-12 col-md-5">
            <img className="img-fluid" src={imgURL} alt={imgAlt} />
          </div>
          <div className="col-12 col-md-7">
            <div className="movie-description">
              <p>{description}</p>
            </div>
            <div className="col-12">
              <div className="d-flex">
                <h6 className="pe-1">Título: </h6>
                <p>{title}</p>
              </div>
              <div className="d-flex aling-items-center">
                <h6 className="m-0">Calificación: </h6>
                <p className="m-0 px-1">{vote_average}</p>
                {startRate(vote_average).map((start, idx) => (
                  <span key={idx} className={`mx-1 ${start}`}></span>
                ))}
              </div>
              <div className="d-flex">
                <h6 className="pe-1">Genero:</h6>
                {gender.map((gen, idx) =>
                  idx > 0 ? (
                    <span key={idx}>, {gen}</span>
                  ) : (
                    <span key={idx}>{gen}</span>
                  )
                )}
              </div>
              <div className="d-flex">
                <h6 className="pe-1">Fecha de realización: </h6>
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
