import { createContext } from "react";

const defaultState = {
  data: {},
  setData: () => {},
  initialState: {},
  // setData: () => {},

  // setSearch: () => {},
  // setSearchGender: () => {},
  // optionSelected: null,
};

const AppContext = createContext(defaultState);

export default AppContext;
