import { useSelector } from "react-redux";
import "./App.css";
import Counter from "./components/Counter";

function App() {
  const countNumber = useSelector((state) => state.counter.count);
  return (
    <>
      <div className="text-center">
        <h1 className="font-mono text-black text-[50px] text-center font-bold">
          React Redux Toolkit
        </h1>
        <h1 className="text-black font-mono font-bold text-[80px]">
          {countNumber}
        </h1>
        <Counter />
      </div>
    </>
  );
}

export default App;
