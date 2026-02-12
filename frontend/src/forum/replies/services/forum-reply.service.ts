import api from "../../../shared/services/api";
import type { ForumReply } from "../types/forum-reply.type";
import type { CreateReplyDTO } from "../types/create-reply.dto";


export const forumReplyService = {

  async getReplies(topicId: number): Promise<ForumReply[]> {
    const { data } = await api.get(`/topics/${topicId}/posts`);
    return data;
  },

  async create(dto: CreateReplyDTO): Promise<ForumReply> {
    const { data } = await api.post("/posts", dto);
    return data;
  },

  async update(id: number, dto: Partial<CreateReplyDTO>) {
    const { data } = await api.put(`/posts/${id}`, dto);
    return data;
  },

  async delete(id: number) {
    await api.delete(`/posts/${id}`);
  },
};
