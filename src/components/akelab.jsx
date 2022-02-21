import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Akelab = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    calAkelabserial(data?.formAkelab);
  };

  const [akelabSequence, setAkelabSequence] = useState("");

  const calAkelabserial = (number) => {
    let result = "";

    for (let i = 1; i <= number; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        if (i % 3 === 0 && i % 5 === 0) {
          result = result + "AKELAB, ";
        } else {
          if (i % 3 === 0) {
            result = result + "AKE, ";
          } else {
            result = result + "LAB, ";
          }
        }
      } else {
        result = result + i + ", ";
      }
    }
    result = result.substring(0, result.length - 2);
    setAkelabSequence(result);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Akelab Sequence</h2>
        <h3>Secuencia Akelab de:</h3>
        <input
          type="number"
          {...register("formAkelab", {
            required: true,
            min: {
              value: 1,
              message: "El valor minimo permitido es 1",
            },
          })}
        />
        <button type="submit">Find Sequence</button>
        {akelabSequence !== [] && <span>{akelabSequence}</span>}
      </form>
    </>
  );
};

export default Akelab;
