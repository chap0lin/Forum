
import { Router } from "express";
import { protect, restrictTo } from "../middlewares/authMiddleware";
import { RevenueService } from "../../services/RevenueService";

const router = Router();

router.use(protect, restrictTo("coordinator"));

router.get("/revenue", async (req, res, next) => {
    try {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const revenue = await RevenueService.calculateRevenue((req as any).user.id, "coordinator");
        res.json(revenue);
    } catch (err) {
        next(err);
    }
});

router.get("/members", async (req, res, next) => {
    try {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const members = await RevenueService.getMembers((req as any).user.id);
        res.json(members);
    } catch (err) {
        next(err);
    }
});

export default router;
