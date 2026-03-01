import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Estrategia from "./pages/Estrategia";
import Colunistas from "./pages/Colunistas";
import News from "./pages/News";

// Auth
import InviteLanding from "./pages/auth/InviteLanding";
import Signup from "./pages/auth/Signup";

// Protected Pages
import TopicList from "./pages/forum/TopicList";
import TopicDetail from "./pages/forum/TopicDetail";
import Chat from "./pages/messages/Chat";
import CoordinatorDashboard from "./pages/coordinator/Dashboard";
import AdminPayouts from "./pages/admin/Payouts";
import PageEditor from "./pages/admin/PageEditor";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/estrategia" element={<Estrategia />} />
        <Route path="/colunistas" element={<Colunistas />} />
        <Route path="/noticias" element={<News />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* New Auth Routes */}
        <Route path="/invite/:token" element={<InviteLanding />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/forum" element={<TopicList />} />
          <Route path="/forum/topic/:id" element={<TopicDetail />} />
          <Route path="/messages" element={<Chat />} />

          {/* Role specific routes could be further protected */}
          <Route path="/coordinator" element={<CoordinatorDashboard />} />
          <Route path="/admin/payouts" element={<AdminPayouts />} />
          <Route path="/admin/pages" element={<PageEditor />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;
