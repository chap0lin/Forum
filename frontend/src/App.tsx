import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Estrategia from "./pages/Estrategia";
import Colunistas from "./pages/Colunistas";
;

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/estrategia" element={<Estrategia />} />
        
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/colunistas" element={<Colunistas/>} />
      </Routes>
    </HashRouter>
  );
};

export default App;
