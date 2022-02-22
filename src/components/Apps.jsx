import React, { useEffect, useState } from "react";
import AppContext from "../context/app-context";

//Components
import api from "../api";
import SearchBar from "./searchbar";
import ListMovies from "./list-movies";

const Apps = () => {
  const [dataListMovies, setDataListMovies] = useState({});
  const [initialState, setInitialState] = useState({});
  const getListMovies = async () => {
    const response = await api.getMovies();
    if (response.ok) {
      setDataListMovies(response.data);
      setInitialState(response.data);
      console.log(dataListMovies);
      // setInitialData(response.data);
    } else {
      alert(response.message);
    }
  };

  // const getDefaultList=()=>{
  //   getListMovies()
  // }

  return (
    <AppContext.Provider
      value={{
        data: dataListMovies,
        setData: setDataListMovies,
        initialState: initialState,
      }}
    >
      <div className="d-flex container">
        <button className="btn btn-primary" onClick={() => getListMovies()}>
          soy un boton
        </button>
        <SearchBar></SearchBar>
      </div>

      <ListMovies data={dataListMovies} />
    </AppContext.Provider>
  );
};

export default Apps;
