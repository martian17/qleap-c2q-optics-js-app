import ReactDOM from "react-dom";
import React from "react";
import useAnimation from "./useAnimat"
import {FourierAnalysis, Blackbody, DoubleSlit, FourierAnalysis, Interferometry,Photoelectric, SternGerlach, Superposition} from "./pages";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";

const Index = () => {
  return <ul>
    <li><Link to="fourier">Fourier Analysis</Link></li>
    <li><Link to="superposition">Superposition of Traveling Waves</Link></li>
    <li><Link to="double-slit">Double-Slit Experiment (or Michelson interferometer)</Link></li>
    <li><Link to="blackbody">Blackbody Radiation</Link></li>
    <li><Link to="photoelectric">Photoelectric Effect</Link></li>
    <li><Link to="stern-gerlach">Stern-Gerlach Experiment with Light</Link></li>
    <li><Link to="interferometry">Interferometry</Link></li>
  </ul>;
};

const LINKS = {
  "/": Index,
  "fourier": FourierAnalysis,
  "superposition": Superposition,
  "double-slit": DoubleSlit,
  "blackbody": Blackbody,
  "photoelectric": Photoelectric,
  "stern-gerlach": SternGerlach,
  "interferometry": Interferometry
};


const App = () => {
  return <div>
    <Router>
      <Link to="/"><h1>Hello React</h1></Link>
      <Routes>
        {Object.entries(LINKS).map(([path, Element]) => <Route key={path} path={path} element={<Element />} />)}
      </Routes>
    </Router>
  </div>;
};

ReactDOM.render(<App />, document.getElementById("app-root"));
