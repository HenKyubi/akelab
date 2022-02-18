import { createContext } from "react";

const defaultState = {
  setSearch: () => {},
  setSearchGender: () => {},
  optionSelected: null,
};

const AppContext = createContext(defaultState);

export default AppContext;
