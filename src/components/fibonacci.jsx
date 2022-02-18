import React, { useState } from "react";
import { useForm } from "react-hook-form";
const Fibonacci = () => {
  const { handleSubmit } = useForm();
  const onSubmit = (num) => fibonacciResult(num);
  const [secuenceFibonacci, setSecuenceFibonacci] = useState([]);
  const fibonacciResult = (num) => {
    if (num === 1) {
      return [0, 1];
    } else {
      const sequence = fibonacciResult(num - 1);
      sequence.push(sequence.length - 1 + sequence.length - 2);
      setSecuenceFibonacci(sequence);
      return sequence;
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Fibonacci</h2>
        <h3>Secuencia fibonacci de:</h3>
        <input type="number" min="1" />
        <button type="submit">Find Sequence</button>
        {secuenceFibonacci !== [] && <span>{secuenceFibonacci}</span>}
      </form>
    </>
  );
};

export default Fibonacci;
