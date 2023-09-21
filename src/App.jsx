import { Routes, Route } from "react-router-dom";
import InicioApp from "./views/InicioApp";
import Thanks from "./views/Thanks";
//css
import "./app.css";

const App = () => {
  return (
    <div className="app-container">
      <Routes>
        <Route element={<InicioApp/>} path="/"></Route>
        <Route element={<Thanks/>} path="/thanks"></Route>
      </Routes>
    </div>
  );
};

export default App;
