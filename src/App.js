import React, { useEffect, useState } from "react";
import Fibonacci from "./components/fibonaci";
import api from "./api";
import Movie from "./components/movie";
import "./styles/App.scss";

const App = () => {
  const [data, setData] = useState({});

  const getListMovies = async () => {
    const response = await api.getMovies();
    if (response.ok) {
      console.log(response.data);
      setData(response.data);
    } else {
      alert(response.message);
    }
  };

  useEffect(() => {
    getListMovies();
  }, []);

  return (
    <div className="dashboard-movies">
      <div className="row">
        {data?.results?.length > 0 &&
          data?.results?.map((dataMovie, key) => (
            <Movie
              title={dataMovie?.title}
              imgURL={`${data.images_url}${dataMovie?.poster_path}`}
              imgAlt={`${dataMovie?.title} poster`}
              description={dataMovie?.overview}
              vote_average={dataMovie?.vote_average}
              release_date={dataMovie?.release_date}
              key={key}
            />
          ))}
      </div>
      {/* <Fibonacci />
      <div>Fibonaci</div>
      <div>AKELAB</div>
      <div>Peliculas</div>
      <div>{JSON.stringify(data)}</div> */}
      {/* <Movie /> */}
    </div>
  );
};

export default App;
