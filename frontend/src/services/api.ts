import axios from "axios";

const API_URL = "http://localhost:3000/api";

// Função de login
export const login = async (email: string, password: string) => {
  const res = await axios.post(`${API_URL}/auth/login`, { email, password });

  const { token } = res.data;

  // Salva o token no localStorage para autenticação nas próximas requisições
  if (token) {
    localStorage.setItem("token", token);
  }

  return res.data; // retorna { token: "..." } ou outros dados do backend
};

// Instância do axios para requisições autenticadas
const api = axios.create({
  baseURL: API_URL,
});

// Interceptor de requisição
// Adiciona o token automaticamente no header Authorization de todas as requisições
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptor de resposta
// Redireciona o usuário para a tela de login se a sessão expirou ou ele não estiver autenticado
api.interceptors.response.use(
  (response) => response, // se a resposta estiver ok, apenas retorna
  (error) => {
    if (error.response && error.response.status === 401) {
      // Token inválido ou não fornecido
      localStorage.removeItem("token"); // remove token armazenado
      window.location.href = "/login"; // redireciona para a tela de login
    }
    return Promise.reject(error);
  }
);

export default api;
