import React, { useState } from "react";
import { useForm } from "react-hook-form";
const Fibonacci = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (num) => calFibonacci(num?.formFibonacci);
  const [secuenceFibonacci, setSecuenceFibonacci] = useState("");

  const calFibonacci = (dato) => {
    if (dato > 1) {
      let limit = dato;
      let fibo = [0, 1];
      for (let i = 2; i <= limit; i++) {
        fibo.push(fibo[i - 1] + fibo[i - 2]);
      }
      setSecuenceFibonacci(fibo.join());
    } else {
      setSecuenceFibonacci(1);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Fibonacci</h2>
        <h3>Secuencia fibonacci de:</h3>
        <input
          type="number"
          {...register("formFibonacci", {
            required: true,
            min: {
              value: 1,
              message: "El valor minimo permitido es 1",
            },
          })}
        />
        <button type="submit">Find Sequence</button>
        {secuenceFibonacci !== "" && <span>{secuenceFibonacci}</span>}
      </form>
    </>
  );
};

export default Fibonacci;
