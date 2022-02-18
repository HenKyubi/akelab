import React, { useState } from "react";
import { components } from "react-select";
import { default as ReactSelect } from "react-select";

const converToObject = (data) => {
  let array = [];
  for (let i = 0; i < data?.data?.length; i++) {
    array.push({ value: `"${data.data[i]}${i}"`, label: `"${data.data[i]}"` });
  }
  return array;
};

const Option = (props) => {
  return (
    <div>
      <components.Option {...props}>
        <input
          type="checkbox"
          checked={props.isSelected}
          onChange={() => null}
        />{" "}
        <label>{props.label}</label>
      </components.Option>
    </div>
  );
};

const Gender = ({ data }) => {
  // console.log(data);}
  const [optionSelected, setOptionSelected] = useState(null);

  const handleChange = (selected) => setOptionSelected(selected);

  return (
    <span
      className="d-inline-block filter-gender"
      data-toggle="popover"
      data-trigger="focus"
      data-content="Please selecet gender(s)"
    >
      <ReactSelect
        options={converToObject({ data })}
        isMulti
        closeMenuOnSelect={false}
        hideSelectedOptions={false}
        components={{
          Option,
        }}
        onChange={handleChange}
        allowSelectAll={true}
        value={optionSelected}
      />
    </span>
  );
};

export default Gender;
