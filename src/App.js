import React, { useState } from "react";
import "./styles.css";
import Msg from "./Msg";

export default function App() {
  let [state, setState] = useState(0);
  let [dayTime, setDaytime] = useState(false);
  return (
    <div className={dayTime ? "day" : "night"}>
      <Msg counter={state} />

      <button onClick={() => setState(++state)}>Plus</button>
      <button onClick={() => setState(0)}>Reset</button>
      <button onClick={() => setState(--state)}>Minus</button>
      <button onClick={() => setDaytime(!dayTime)}>Day & Night</button>
    </div>
  );
}
