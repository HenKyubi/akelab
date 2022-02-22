import React, { useContext } from "react";
import AppContext from "../context/app-context";

const SearchBar = () => {
  const { data, setData, initialState } = useContext(AppContext);

  const search = (text) => {
    if (text) {
      console.log(data);
      const newData = data.results.filter((item) =>
        item.title.toLowerCase().includes(text.toLowerCase())
      );
      // console.log(JSON.stringify(newData));
      setData({
        ...data,
        results: newData,
      });
    } else {
      console.log("VACIO");
      setData(initialState);
    }
  };

  return (
    <div id="searchBar" className="px-2 d-flex d-column">
      <div className="input-search-bar-icon d-flex ps-1 pe-4">
        <input
          className="input-search-bar aling-items-center "
          type="text"
          onChange={(e) => {
            search(e.target.value);
            console.log(e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default SearchBar;
