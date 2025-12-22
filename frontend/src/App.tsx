import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Estrategia from "./pages/Estrategia";
import Colunistas from "./pages/Colunistas";
import News from "./pages/News";
import InviteManagement from "./pages/InviteManagement";
;

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/estrategia" element={<Estrategia />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/colunistas" element={<Colunistas />} />
        <Route path="/noticias" element={<News />} />
        <Route path="/gerenciar-movimento" element={<InviteManagement />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
