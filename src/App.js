import React from "react";
import { useSelector } from "react-redux";
import "./styles.css";

export default function App() {
  const birds = useSelector((state) => state.birds);
  return (
    <div className="wrapper">
      <form>
        <label>
          <h1>Bird List</h1>
          <p>Add Bird</p>
          <input type="text" />
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
              <button>
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
