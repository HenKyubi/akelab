import React, { useContext } from "react";
import icon from "../assets/images/Arrow-Icon.png";
import AppContext from "../context/app-context";

const FilterOrderBy = () => {
  const { data, setData, initialState } = useContext(AppContext);
  const FilterNewesOldest = () => {
    const response = [];
    let dateBefore;
    for (let i = 0; i < data.results.length; i++) {
      let date = new Date(data.results[i].release_date).getTime();
      // console.log(date);
      if (i === 0) {
        response.push(data.results[i]);
        // console.log(response);
        // console.log(dateBefore);
      } else {
        let dateBefore = new Date(data.results[i - 1].release_date).getTime();
        if (dateBefore > date) {
          response.push(response.push(data.results[i]));
        } else {
          response.insert(i - 1, data.results[i]);
        }
      }
      console.log(response);
    }
  };
  return (
    <button className="btn btn-primary" onClick={() => FilterNewesOldest()}>
      Nuevo a viejo
    </button>
    // <div id="order-by" className="nav-item dropdown">
    //   <div
    //     className="nav-link dropdown-toggle d-flex"
    //     href="#"
    //     id="navbarDropdown"
    //     role="button"
    //     data-bs-toggle="dropdown"
    //     aria-expanded="false"
    //   >
    //     <p className="pe-2 m-0">Ordenar</p>
    //     <img className="img-fluid" src={icon} alt="arrow-icon" />
    //   </div>
    //   <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
    //     <span>Fecha</span>
    //     <li>Nuevas - Antiguas</li>
    //     <li>Antiguas - Nuevas</li>
    //     <span>Calificación </span>
    //     <li>0 - 10 epuntos</li>
    //     <li>10 - 0 puntos</li>
    //   </ul>
    // </div>
  );
};

export default FilterOrderBy;
