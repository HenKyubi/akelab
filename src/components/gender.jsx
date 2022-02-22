import React, { useContext } from "react";
import { default as ReactSelect } from "react-select";
import GenderOption from "./gender-option";
import AppContext from "../context/app-context";

const Gender = () => {
  const { data, setData, initialState } = useContext(AppContext);
  const { setSearchGender, optionSelected } = useContext(AppContext);

  const convertToObject = (data) =>
    data.data.map((item, i) => ({ value: item + i, label: item }));

  // const searchGender = (option) => {
  //   const genderId = option.map((op) => {
  //     return data.genres.filter((item) => item.name === op.label)[0].id;
  //   });
  //   const result = [];
  //   for (let i = 0; i < data.results.length; i++) {
  //     const item = data.results[i];
  //     const items = item.genre_ids.some((id) => genderId.indexOf(id) !== -1);
  //     items && result.push(item);
  //   }
  //   if (result.length > 0) {
  //     console.log("data antes de cambiar ", data);
  //     console.log("result antes de cambiar ", result);
  //     setData({
  //       ...data,
  //       results: result,
  //     });
  //   } else {
  //     setData(initialData);
  //   }
  //   // console.log(genderId);
  //   // console.log("data", data);
  //   // console.log("result", result);
  //   setOptionData(option);
  // };
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
