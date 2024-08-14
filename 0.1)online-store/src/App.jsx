import { useState } from "react";
import { Navbar, Slider, NavigateButtons } from "./components/index";
import { Button } from "@material-tailwind/react";


import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Slider />
      <NavigateButtons />
    </>
  );
}

export default App;
