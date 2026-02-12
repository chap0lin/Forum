import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./content/pages/Home";
import Login from "./auth/pages/Login";
import Register from "./auth/pages/Register";
import Estrategia from "./content/pages/Estrategia";
import Colunistas from "./content/pages/Colunistas";
import InviteManagement from "./admin/pages/InviteManagement";
import ForumHome from "./forum/pages/ForumHome/page";
import Contact from "./content/pages/Contact";


const App = () => { 
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/estrategia" element={<Estrategia />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/colunistas" element={<Colunistas />} />
        <Route path="/forum" element={<ForumHome />} />
        <Route path="/gerenciar-movimento" element={<InviteManagement />} />
        <Route path="/contato" element={<Contact />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
