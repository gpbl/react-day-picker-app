import * as React from "react";
import ReactDOM from "react-dom";
import ReactDayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";

const App = () => {
  return (
    <div>
      <h1>Hello, world!</h1>
      <ReactDayPicker />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
