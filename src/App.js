import React from "react";
import "./styles.css";
import DateRangeFilter from "./DateRangeFilter";

export default function App() {
  const onChange = ranges => {
    // ranges ...
    alert("changed check the console log");
    console.log(ranges);
  };

  return (
    <div className="App">
      <DateRangeFilter onChange={onChange} />
    </div>
  );
}

