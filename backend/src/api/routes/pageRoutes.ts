
import { Router } from "express";
import { protect, restrictTo } from "../middlewares/authMiddleware";
import { PageService } from "../../services/PageService";

const router = Router();

// Public read access for some pages? Or protected?
// Specification says "Institutional Pages", implies public or all members.
// Let's assume protect for now, or public if needed.
// US4: "Content & Institutional Pages" -> usually public (Statute, Privacy).
// We'll allow public read for now.

router.get("/:slug", async (req, res, next) => {
    try {
        const page = await PageService.getPage(req.params.slug);
        res.json(page);
    } catch (err) {
        next(err);
    }
});

// Admin write access
router.post("/", protect, restrictTo("admin"), async (req, res, next) => {
    try {
        const { slug, title, content } = req.body;
        const page = await PageService.createOrUpdatePage(slug, { title, content });
        res.status(200).json(page);
    } catch (err) {
        next(err);
    }
});

export default router;
