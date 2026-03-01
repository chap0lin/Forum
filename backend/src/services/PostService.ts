
import { PostModel, Post } from "../models/Post";
import { TopicService } from "./TopicService";
import { AppError } from "../api/middlewares/errorMiddleware";

export const PostService = {
    async getPostsByTopic(topicId: number) {
        // Ensure topic exists
        await TopicService.getTopic(topicId);

        // Fetch posts
        const posts = await PostModel.findByTopicId(topicId);
        // Logic to nest posts could happen here or in frontend. 
        // Returning flat list for MVP, frontend can tree-ify.
        return posts;
    },

    async createPost(data: Partial<Post>, userId: number) {
        if (!data.topic_id || !data.content) {
            throw new AppError("Topic ID and content are required", 400);
        }

        // Ensure topic isn't locked (future enhancement)

        return PostModel.create({
            ...data,
            author_id: userId
        });
    }
};
