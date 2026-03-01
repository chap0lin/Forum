
import { Router } from "express";
import { protect, restrictTo } from "../middlewares/authMiddleware";
import { RevenueService } from "../../services/RevenueService";

const router = Router();

router.use(protect, restrictTo("admin"));

router.get("/payouts", async (req, res, next) => {
    try {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const revenue = await RevenueService.calculateRevenue((req as any).user.id, "admin");
        res.json(revenue);
    } catch (err) {
        next(err);
    }
});

export default router;
