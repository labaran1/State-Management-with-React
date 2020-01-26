import React from "react";
import "./App.css";
import Demo from "./Component/Demo";
import MyState from "./Context/myState";

function App() {
  return (
    <MyState>
      <div className="App">
        <Demo />
      </div>
    </MyState>
  );
}

export default App;
