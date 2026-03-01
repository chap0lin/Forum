
import { Router } from "express";
import { AuthService } from "../../services/AuthService";

const router = Router();

router.get("/invite/:token", async (req, res, next) => {
    try {
        const result = await AuthService.validateInvite(req.params.token);
        res.json(result);
    } catch (error) {
        next(error);
    }
});

router.post("/signup", async (req, res, next) => {
    try {
        const result = await AuthService.signup(req.body);
        res.json(result);
    } catch (error) {
        next(error);
    }
});

router.post("/login", async (req, res, next) => {
    try {
        const result = await AuthService.login(req.body);
        res.json(result);
    } catch (error) {
        next(error);
    }
});

export default router;
