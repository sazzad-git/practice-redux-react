import { useState } from "react";
import { useDispatch } from "react-redux";
import { decrement, incDynamic, increment } from "../features/counterSlice";

const Counter = () => {
  const [count, setCount] = useState(0);

  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment(setCount((prev) => prev + 1)));
  };

  const handleDecrement = () => {
    dispatch(decrement(setCount((prev) => prev - 1)));
  };

  const handleDynamic = () => {
    dispatch(incDynamic(5));
  };

  return (
    <>
      <h1 className="text-black font-mono font-bold text-[80px]">{count}</h1>
      <button
        className="px-5 py-2 bg-green-600 rounded-md"
        onClick={handleIncrement}
      >
        Increment
      </button>
      <button
        className="px-5 py-2 bg-red-600 rounded-md"
        onClick={handleDecrement}
      >
        Decrement
      </button>
      <button
        className="px-5 py-2 bg-green-600 rounded-md"
        onClick={handleDynamic}
      >
        Dynamic Inc
      </button>
    </>
  );
};

export default Counter;
