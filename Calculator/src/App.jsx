import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useFetch } from "./hooks/useFetch";
import { useImages } from "./hooks/useImages";
import { Calculator } from "./components/Calculator/Calculator";
import { Wrapper } from "./components/Wrapper/Wrapper";
import "./App.scss";

function App() {
  return (
    <>
    <Wrapper>
      <Calculator />
    </Wrapper>
    </>
  );
}

export default App;
