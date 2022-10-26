import { useState } from "react";
import Chart from "./components/Chart";
import { Wrapper, Status } from "@googlemaps/react-wrapper";

function App() {
  const render = (status) => {
    return <h1>{status}</h1>;
  };
  return (
    <div>
      <Chart />
    </div>
  );
}

export default App;
