import React, { useContext } from "react";
import AppContext from "../context/app-context";

const SearchBar = () => {
  const { setSearch } = useContext(AppContext);

  return (
    <div id="searchBar" className="px-2">
      <div className="input-search-bar-icon ps-1 pe-4">
        <input
          className="input-search-bar "
          type="text"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SearchBar;
