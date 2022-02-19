import React, { useContext } from "react";
import { default as ReactSelect } from "react-select";
import GenderOption from "./gender-option";
import AppContext from "../context/app-context";

const Gender = ({ data }) => {
  const { setSearchGender, optionSelected } = useContext(AppContext);

  const convertToObject = (data) =>
    data.data.map((item, i) => ({ value: item + i, label: item }));

  return (
    <span
      id="gender-filter"
      className="d-inline-block"
      data-toggle="popover"
      data-trigger="focus"
      data-content="Please selecet gender(s)"
    >
      <ReactSelect
        options={convertToObject({ data })}
        isMulti
        closeMenuOnSelect={false}
        hideSelectedOptions={false}
        components={<GenderOption />}
        onChange={setSearchGender}
        allowSelectAll={true}
        value={optionSelected}
      />
    </span>
  );
};

export default Gender;
