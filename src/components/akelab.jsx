import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const Akelab = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    calAkelabserial(Number(data?.formAkelab));
  };

  const [akelabSequence, setAkelabSequence] = useState([]);

  const calAkelabserial = (number) => {
    console.log("entro el numero: " + number);

    //modo case vv
    for (let i = 1; i <= number; i++) {
      console.log("akelabSequence vale: " + akelabSequence);
      if (i % 3 === 0 || i % 5 === 0) {
        if (i % 3 === 0 && i % 5 === 0) {
          setAkelabSequence(...["AKELAB"]);
          // console.log("AKELAB");
        } else {
          if (i % 3 === 0) {
            setAkelabSequence(...["AKE"]);
            // console.log("AKE");
          } else {
            setAkelabSequence(...["LAB"]);
            // console.log("LAB");
          }
        }
      } else {
        setAkelabSequence(...[i]);
        // console.log(i);
      }
      // if (i % 3 === 0 || i % 5 === 0) {
      //   switch (i) {
      //     case i % 3 === 0 && i % 5 === 0:
      //       console.log("AKELAB");
      //       break;
      //     case i % 3 === 0:
      //       console.log("AKE");
      //       break;
      //     case (i % 5 === 0):
      //       console.log("LAB")
      //       break;
      //     default:
      //       console.log(i);
      //       break;
      //   }
      // } else {
      //   console.log(i);
      // }
    }
  };
  // useEffect(
  //   (
  //     console.log(

  //     )
  //   ),[]
  // )

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Akelab Sequence</h2>
        <h3>Secuencia Akelab de:</h3>
        <input
          type="number"
          {...register("formAkelab", {
            required: true,
            min: 1,
          })}
        />
        <button type="submit">Find Sequence</button>
        {akelabSequence !== [] && <span>{akelabSequence}</span>}
      </form>
    </>
  );
};

export default Akelab;
