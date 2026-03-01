
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api", // Adjust if needed
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const authApi = {
  validateInvite: (token: string) => api.get(`/auth/invite/${token}`),
  signup: (data: any) => api.post("/auth/signup", data),
  login: (email: string, password: string) => api.post("/auth/login", { email, password }).then((res) => res.data),
};

export const login = authApi.login;

export const forumApi = {
  listTopics: (page = 1) => api.get(`/topics?page=${page}`),
  getTopic: (id: number) => api.get(`/topics/${id}`),
  createTopic: (data: any) => api.post("/topics", data),
  reply: (topicId: number, data: any) => api.post(`/topics/${topicId}/posts`, data),
};

export const pageApi = {
  getPage: (slug: string) => api.get(`/pages/${slug}`),
  savePage: (data: any) => api.post("/pages", data),
};

export const messageApi = {
  getConversations: () => api.get("/messages/conversations"),
  getMessages: (userId: number) => api.get(`/messages/${userId}`),
  sendMessage: (userId: number, content: string) => api.post(`/messages/${userId}`, { content }),
};

export default api;
