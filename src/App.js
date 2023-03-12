import Home from "./components/home/Home";
import "./App.css";
import Header from "./components/header/Header";
import Tour from "./components/tours/tour/Tour";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/city/:id" element={<Tour key={"rec6d6T3q5EBIdCfD"} id={"receAEzz86KzW2gvH"}/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
