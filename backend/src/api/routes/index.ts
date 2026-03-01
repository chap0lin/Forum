
import { Router } from "express";
import authRoutes from "./authRoutes";
// Routes will be imported here in next phases
import forumRoutes from "./forumRoutes";
import coordinatorRoutes from "./coordinatorRoutes";
import adminRoutes from "./adminRoutes";
import messageRoutes from "./messageRoutes";
import pageRoutes from "./pageRoutes";

const router = Router();

router.get("/health", (req, res) => {
    res.status(200).json({ status: "ok", timestamp: new Date() });
});

router.use("/auth", authRoutes);
router.use("/topics", forumRoutes); // encompasses posts
router.use("/dashboard", coordinatorRoutes);
router.use("/admin", adminRoutes);
router.use("/messages", messageRoutes);
router.use("/pages", pageRoutes);

export default router;
