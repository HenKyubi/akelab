import React from "react";
import icon from "../assets/images/Arrow-Icon.png";

const OrderBy = () => {
  return (
    <div id="order-by" className="nav-item dropdown">
      <div
        className="nav-link dropdown-toggle d-flex"
        href="#"
        id="navbarDropdown"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <p className="pe-2 m-0">Ordenar</p>
        <img className="img-fluid" src={icon} alt="arrow-icon" />
      </div>
      <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
        <span>Fecha</span>
        <li>Nuevas - Antiguas</li>
        <li>Antiguas - Nuevas</li>
        <span>Calificación </span>
        <li>0 - 10 epuntos</li>
        <li>10 - 0 puntos</li>
      </ul>
    </div>

    // <div className="dropdown">
    //   <button
    //     className="btn btn-secondary dropdown-toggle"
    //     type="button"
    //     id="dropdownOrderBy"
    //     data-toggle="dropdown1"
    //     aria-haspopup="true"
    //     aria-expanded="false"
    //   >
    //     Dropdown button
    //   </button>
    //   <div className="dropdown-menu" aria-labelledby="dropdownOrderBy">
    //     <div className="dropdown-item" href="#">
    //       Action
    //     </div>
    //     <div className="dropdown-item" href="#">
    //       Another action
    //     </div>
    //     <div className="dropdown-item" href="#">
    //       Something else here
    //     </div>
    //   </div>
    // </div>

    // <div id="order-by" className="d-flex align-items-center pe-3">
    //   <p className="m-0">Ordenar</p>
    // </div>
  );
};

export default OrderBy;
