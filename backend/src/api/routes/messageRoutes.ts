
import { Router } from "express";
import { protect } from "../middlewares/authMiddleware";
import { MessageService } from "../../services/MessageService";

const router = Router();

router.use(protect);

// Get recent conversations (people I talked to)
router.get("/conversations", async (req, res, next) => {
    try {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const users = await MessageService.getRecentConversations((req as any).user.id);
        res.json(users);
    } catch (err) {
        next(err);
    }
});

// Get messages with specific user
router.get("/:userId", async (req, res, next) => {
    try {
        const otherUserId = parseInt(req.params.userId);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const messages = await MessageService.getConversation((req as any).user.id, otherUserId);
        res.json(messages);
    } catch (err) {
        next(err);
    }
});

// Send message
router.post("/:userId", async (req, res, next) => {
    try {
        const receiverId = parseInt(req.params.userId);
        const { content } = req.body;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const message = await MessageService.sendMessage((req as any).user.id, receiverId, content);
        res.status(201).json(message);
    } catch (err) {
        next(err);
    }
});

export default router;
