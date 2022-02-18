import { createContext } from "react";

const defaultState = {
  setSearch: () => {},
};

const AppContext = createContext(defaultState);

export default AppContext;
