import React, { useContext, useEffect, useState } from "react";
import Apps from "./components/Apps";
// import Loader from "./components/loader";
// import Fibonacci from "./components/fibonacci";
// import api from "./api";
// import Movie from "./components/movie";
// import NavBar from "./components/navBar";
import AppContext from "./context/app-context";
// import Akelab from "./components/akelab";

const App = () => {
  // const [data, setData] = useState({});
  // const [initialData, setInitialData] = useState({});
  // const [loading, setLoading] = useState(true);
  // const [optionData, setOptionData] = useState(null);

  // const getListMovies = async () => {
  //   const response = await api.getMovies();
  //   if (response.ok) {
  //     setData(response.data);
  //     setInitialData(response.data);
  //   } else {
  //     alert(response.message);
  //   }
  // };

  // const getGenders = (gendersArray = [], genderToFound = []) => {
  //   let genderNames = [];
  //   for (let i = 0; i < genderToFound.length; i++) {
  //     const genderName = gendersArray.find(
  //       (gender) => gender?.id === genderToFound[i]
  //     );
  //     genderNames.push(genderName?.name);
  //   }
  //   return genderNames;
  // };

  // const searchGender = (option) => {
  //   const genderId = option.map((op) => {
  //     return data.genres.filter((item) => item.name === op.label)[0].id;
  //   });
  //   const result = [];
  //   for (let i = 0; i < data.results.length; i++) {
  //     const item = data.results[i];
  //     const items = item.genre_ids.some((id) => genderId.indexOf(id) !== -1);
  //     items && result.push(item);
  //   }
  //   if (result.length > 0) {
  //     console.log("data antes de cambiar ", data);
  //     console.log("result antes de cambiar ", result);
  //     setData({
  //       ...data,
  //       results: result,
  //     });
  //   } else {
  //     setData(initialData);
  //   }
  //   // console.log(genderId);
  //   // console.log("data", data);
  //   // console.log("result", result);
  //   setOptionData(option);
  // };

  // const search = (text) => {
  //   if (text) {
  //     const newData = data.results.filter((item) =>
  //       item.title.toLowerCase().includes(text.toLowerCase())
  //     );
  //     setData({
  //       ...data,
  //       results: newData,
  //     });
  //   } else {
  //     setData(initialData);
  //   }
  // };

  // const formatText = (str) => {
  //   return str.length < 140
  //     ? str
  //     : `${str.substr(0, str.substr(0, 130).lastIndexOf(" "))}...`;
  // };

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 2300);
  //   getListMovies();
  // }, []);

  return (
    // <Akelab />
    // <Fibonacci />

    <Apps />

    // <AppContext.Provider
    //   value={{
    //     setSearch: search,
    //     setSearchGender: searchGender,
    //     optionSelected: optionData,
    //   }}
    // >
    //   {loading && data !== undefined ? (
    //     <Loader />
    //   ) : (
    //     <div id="movies">
    //       {!data || <NavBar data={data} />}
    //       <div className="px-3 pe-md-0">
    //         <div className="dashboard-movies  py-2 ps-1 pe-3 me-0">
    //           <div>
    //             <div className="row">
    //               {data?.results?.length > 0 &&
    //                 data?.results?.map((dataMovie, key) => (
    //                   <Movie
    //                     title={dataMovie?.title}
    //                     imgURL={`${data.images_url}${dataMovie?.poster_path}`}
    //                     imgAlt={`${dataMovie?.title} poster`}
    //                     description={formatText(dataMovie?.overview)}
    //                     vote_average={dataMovie?.vote_average}
    //                     gender={getGenders(data?.genres, dataMovie?.genre_ids)}
    //                     release_date={dataMovie?.release_date}
    //                     key={key}
    //                   />
    //                 ))}
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   )}
    // </AppContext.Provider>
  );
};

export default App;
