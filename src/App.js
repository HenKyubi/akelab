import React, { useEffect, useState } from "react";
import Fibonacci from "./components/fibonaci";
import api from "./api";

const App = () => {
  const [data, setData] = useState({});

  const getListMovies = async () => {
    const response = await api.getMovies();
    if (response.ok) {
      console.log(response);
      setData(response.data);
    } else {
      alert(response.message);
    }
  };

  useEffect(() => {
    getListMovies();
  }, []);

  return (
    <div>
      <Fibonacci />
      <div>Fibonaci</div>
      <div>AKELAB</div>
      <div>Peliculas</div>
      <div>{JSON.stringify(data)}</div>
    </div>
  );
};

export default App;
