import * as React from "react";
import ReactDOM from "react-dom";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const App = () => {
  return (
    <div>
      <h1>Hello, world!</h1>
      <DayPicker />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
