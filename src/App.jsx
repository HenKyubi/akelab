import React, { useContext, useEffect, useState } from "react";
import Loader from "./components/loader";
// import Fibonacci from "./components/fibonacci";
import api from "./api";
import Movie from "./components/movie";
import NavBar from "./components/navBar";
import AppContext from "./context/app-context";

const App = () => {
  const [data, setData] = useState({});
  const [initialData, setInitialData] = useState({});
  const [loading, setLoading] = useState(true);
  const { optionSelected } = useContext(AppContext);

  const getListMovies = async () => {
    const response = await api.getMovies();
    if (response.ok) {
      setData(response.data);
      setInitialData(response.data);
    } else {
      alert(response.message);
    }
  };

  const searchGender = () => {
    console.log("optionSelected", optionSelected);
    console.log("data", data);
  };

  const search = (text) => {
    if (text) {
      const newData = data.results.filter((item) =>
        item.title.toLowerCase().includes(text.toLowerCase())
      );
      setData({
        ...data,
        results: newData,
      });
    } else {
      setData(initialData);
    }
  };

  const formatText = (str) => {
    return str.length < 140
      ? str
      : `${str.substr(0, str.substr(0, 130).lastIndexOf(" "))}...`;
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2300);
    getListMovies();
  }, []);

  return (
    <AppContext.Provider
      value={{
        setSearch: search,
        setSearchGender: searchGender,
      }}
    >
      {/* <Fibonacci /> */}
      {loading && data !== undefined ? (
        <Loader />
      ) : (
        <div id="movies">
          {!data || <NavBar data={data} />}
          <div className="px-3">
            <div className="dashboard-movies ps-1 pe-3">
              <div>
                <div className="row">
                  {data?.results?.length > 0 &&
                    data?.results?.map((dataMovie, key) => (
                      <Movie
                        title={dataMovie?.title}
                        imgURL={`${data.images_url}${dataMovie?.poster_path}`}
                        imgAlt={`${dataMovie?.title} poster`}
                        description={formatText(dataMovie?.overview)}
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
      )}
    </AppContext.Provider>
  );
};

export default App;
