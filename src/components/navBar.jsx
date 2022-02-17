import React from "react";
import SearchBar from "./searchbar";

const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <SearchBar />
      </div>
    </nav>
  );
};

export default NavBar;
