import React, { useEffect, useState } from "react";
import Loader from "./components/loader";
// import Fibonacci from "./components/fibonaci";
import api from "./api";
import Movie from "./components/movie";
import NavBar from "./components/navBar";

const App = () => {
  const [data, setData] = useState({});

  const getListMovies = async () => {
    const response = await api.getMovies();
    if (response.ok) {
      setData(response.data);
    } else {
      alert(response.message);
    }
  };
  const searchGender = (gendersArray = [], genderToFound = []) => {
    let genderNames = [];
    for (let i = 0; i < genderToFound.length; i++) {
      const genderName = gendersArray.find(
        (gender) => gender?.id === genderToFound[i]
      );
      genderNames.push(genderName?.name);
    }
    return genderNames;
  };

  const [loading, setLoading] = React.useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2300);
    getListMovies();
  }, []);

  return (
    <div>
      {loading ? <Loader /> : null}
      <div id="movies">
        <NavBar />
        <div className="px-3">
          <div className="dashboard-movies pe-3">
            <div>
              <div className="row">
                {data?.results?.length > 0 &&
                  data?.results?.map((dataMovie, key) => (
                    <Movie
                      title={dataMovie?.title}
                      imgURL={`${data.images_url}${dataMovie?.poster_path}`}
                      imgAlt={`${dataMovie?.title} poster`}
                      description={dataMovie?.overview}
                      vote_average={dataMovie?.vote_average}
                      gender={searchGender(
                        data?.genres,
                        data?.results[key]?.genre_ids
                      )}
                      release_date={dataMovie?.release_date}
                      key={key}
                    />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
