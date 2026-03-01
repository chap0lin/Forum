
import { Router } from "express";
import { protect, restrictTo } from "../middlewares/authMiddleware";
import { TopicService } from "../../services/TopicService";
import { PostService } from "../../services/PostService";

const router = Router();

// Topics
router.get("/", protect, async (req, res, next) => {
    try {
        const page = parseInt(req.query.page as string) || 1;
        const limit = parseInt(req.query.limit as string) || 20;
        const topics = await TopicService.listTopics(page, limit);
        res.json(topics);
    } catch (err) {
        next(err);
    }
});

router.get("/:id", protect, async (req, res, next) => {
    try {
        const id = req.params.id;
        if (!id) throw new Error("ID required");
        const topic = await TopicService.getTopic(parseInt(id));
        // Embed posts?
        const posts = await PostService.getPostsByTopic(topic.id);
        res.json({ ...topic, posts });
    } catch (err) {
        next(err);
    }
});

router.post("/", protect, restrictTo("admin", "coordinator"), async (req, res, next) => {
    try {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const userId = (req as any).user.id;
        const topic = await TopicService.createTopic(req.body, userId);
        res.status(201).json(topic);
    } catch (err) {
        next(err);
    }
});

// Posts
router.post("/:topicId/posts", protect, async (req, res, next) => {
    try {
        const topicIdParam = req.params.topicId;
        if (!topicIdParam) throw new Error("Topic ID required");
        const topicId = parseInt(topicIdParam);

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const userId = (req as any).user.id;

        const post = await PostService.createPost({
            ...req.body,
            topic_id: topicId
        }, userId);
        res.status(201).json(post);
    } catch (err) {
        next(err);
    }
});

export default router;
