import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./content/pages/Home";
import Login from "./auth/pages/Login";
import Register from "./auth/pages/Register";
import Estrategia from "./content/pages/Estrategia";
import Colunistas from "./content/pages/Colunistas";
import News from "./content/pages/News";
import InviteManagement from "./admin/pages/InviteManagement";


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
