import logo from "./logo.svg";
import "./App.css";
import {
  increament,
  decreament,
  increase,
} from "./redux/features/counterSlice";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const stateData = useSelector((state) => state.counter);
  console.log(stateData.value);
  return (
    <div className="App">
      <h1>My Counter</h1>
      <h2>{stateData.value}</h2>
      <button onClick={() => dispatch(increament())}>+</button>
      <button onClick={() => dispatch(decreament())}>-</button>
      <button onClick={() => dispatch(increase(10))}>increase by 10</button>
    </div>
  );
}

export default App;
