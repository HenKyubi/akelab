import React, { useContext, useEffect, useState } from "react";

//components
import Movie from "../components/movie";

//context
// import AppContext from "../context/app-context";

const ListMovies = ({ data }) => {
  //   const { data } = useContext(AppContext.data);
  //   const [dataListMovies, setDataListMovies] = useState({});
  //   const getListMovies = async () => {
  //     const response = await api.getMovies();
  //     if (response.ok) {
  //       setDataListMovies(response.data);
  //       console.log(dataListMovies);
  //       // setInitialData(response.data);
  //     } else {
  //       alert(response.message);
  //     }
  //   };
  // useEffect(()=>{
  //   getListMovies()
  // }, [])
  const formatText = (str) => {
    return str.length < 140
      ? str
      : `${str.substr(0, str.substr(0, 130).lastIndexOf(" "))}...`;
  };

  const getGenders = (gendersArray = [], genderToFound = []) => {
    let genderNames = [];
    for (let i = 0; i < genderToFound.length; i++) {
      const genderName = gendersArray.find(
        (gender) => gender?.id === genderToFound[i]
      );
      genderNames.push(genderName?.name);
    }
    return genderNames;
  };

  return (
    <div className="dashboard-movies  py-2 ps-1 pe-3 me-0">
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
                gender={getGenders(data?.genres, dataMovie?.genre_ids)}
                release_date={dataMovie?.release_date}
                key={key}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default ListMovies;
