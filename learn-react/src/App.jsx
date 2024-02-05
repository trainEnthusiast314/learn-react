import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const list = [
    {
      id: 1,
      body: "First Item",
      severity: 1,
      status: "bad",
    },
    {
      id: 2,
      body: "Second Item",
      severity: 2,
      status: "good",
    },
    {
      id: 3,
      body: "Third Item",
      severity: 5,
      status: "Catastrophic",
    },
  ];

  return (
    <div>
      {list.map((item) => {
        return (
          <ul key={item.id}>
            <li>{item.body}</li>
            <li>{item.severity}</li>
            <li>{item.status}</li>
          </ul>
        );
      })}
    </div>
  );
}

export default App;
