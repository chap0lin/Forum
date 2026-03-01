
import { TopicModel, Topic } from "../models/Topic";
import { AppError } from "../api/middlewares/errorMiddleware";

export const TopicService = {
    async listTopics(page = 1, limit = 20) {
        const offset = (page - 1) * limit;
        const topics = await TopicModel.findAll(limit, offset);
        return topics;
    },

    async getTopic(id: number) {
        const topic = await TopicModel.findById(id);
        if (!topic) throw new AppError("Topic not found", 404);
        return topic;
    },

    async createTopic(data: Partial<Topic>, userId: number) {
        if (!data.title || !data.content) {
            throw new AppError("Title and content are required", 400);
        }
        const newTopic = await TopicModel.create({
            ...data,
            author_id: userId
        });
        return newTopic;
    }
};
