import React, { useContext, useState } from "react";
// import { reOrderFormatted } from "../api";
// import AppContext from "../context/app-context";

const SearchBar = ({ data, text = "" }) => {
  // const { setData } = useContext(AppContext);
  const [dataFound, setDataFound] = useState([]);

  const search = (data = [], text) => {
    let response = [];
    for (let i = 0; i < data.length; i++) {
      console.log(data[i]);
    }
  };
  // const searchList = data.filter()
  //     item =>
  //       item.idPokemon.toString().includes(Number(name)) ||
  //       item.namePokemon.includes(name)
  //   )
  //   let pokemonList = await reOrderFormatted(searchList)
  //   pokemonList =
  //     pokemonList.length < searchList.length ? searchList : pokemonList
  //   const res = name ? pokemonList : dataFormatted[0]
  //   setData(res)
  // };

  return (
    <div id="searchBar" className="px-2">
      <input
        className="input-search-bar"
        type="text"
        onChange={(e) => () => search({ data }, e.target.value)}
      />
    </div>
  );

  //   <div className="d-flex form-search align-items-center">
  //     <i className="fas fa-search"></i>
  //     <input
  //       id="input-movie"
  //       className="form-control"
  //       type="search"
  //       placeholder="Search"
  //       aria-label="Search"
  //       onChange={(event) => search(event.target.value)}
  //       list="dataListPokemons"
  //     />
  //     <datalist id="dataListPokemons">
  //       {/* {dataListPokemons.map((item, index) => {
  //         return <option aria-labelledby="Search" value={item?.namePokemon} />;
  //       })} */}
  //     </datalist>
  //   </div>
  // );
};

export default SearchBar;
