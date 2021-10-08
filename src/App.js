import logo from "./logo.svg";
import "./App.css";
import {
  increament,
  decreament,
  increase,
  fetchData,
} from "./redux/features/counterSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, []);

  const statePosts = useSelector((state) => state.posts);
  const { posts } = statePosts;
  console.log(posts);
  // const stateData = useSelector((state) => state.counter);
  // console.log(stateData.value);
  return (
    <div className="App">
      <h1>Showing JSONPLACeholder as a practice</h1>
      {posts.map((post) => {
        return <h2>{post.title}</h2>;
      })}
      {/* <h2>{stateData.value}</h2>
      <button onClick={() => dispatch(increament())}>+</button>
      <button onClick={() => dispatch(decreament())}>-</button>
      <button onClick={() => dispatch(increase(10))}>increase by 10</button> */}
    </div>
  );
}

export default App;
