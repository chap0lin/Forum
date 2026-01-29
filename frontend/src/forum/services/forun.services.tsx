import axios from 'axios';
import type { ForumPost } from '../types/forum-post.type';
import type { CreatePostDTO } from '../types/create-post.dto';

const API_URL = 'http://localhost:3000/api/news';
// depois a gente troca no backend, por enquanto mantém

export const forumService = {
  async getPosts(): Promise<ForumPost[]> {
    const response = await axios.get(API_URL);
    return response.data.data;
  },

  async createPost(data: CreatePostDTO) {
    const response = await axios.post(API_URL, data);
    return response.data;
  },

  async deletePost(id: number) {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  }
};
