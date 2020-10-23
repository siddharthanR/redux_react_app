import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBird, incrementBird } from "../src/store/birds/birds";
import "./App.css";

function App() {
  const [birdName, setBird] = useState("");
  const birds = useSelector((state) => state.birds);
  const dispatch = useDispatch();

  const onHandleSubmit = (event) => {
    event.preventDefault();
    dispatch(addBird(birdName));
    setBird("");
  };
  return (
    <div className="wrapper">
      <h1>Bird List</h1>
      <form onSubmit={onHandleSubmit}>
        <label>
          <p>Add Bird</p>
          <input type="text" onChange={(e) => e.target.value} />
        </label>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
      <ul>
        {birds.map((bird) => (
          <li key={bird.name}>
            <h3>{bird.name}</h3>
            <div>
              Views: {bird.views}
              <button onClick={() => dispatch(incrementBird(bird.name))}>
                <span role="img" aria-label="add">
                  ➕
                </span>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
