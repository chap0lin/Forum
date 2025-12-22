import { Router } from "express";
import * as UserController from "./user.controller";
import { authenticateToken } from "../auth/auth.middleware";

const router = Router();

router.get("/invites", authenticateToken, UserController.getInvitedUsers);
router.get("/", UserController.getAllUsers);
router.get("/:id", UserController.getUserById);
router.post("/", UserController.createUser);
router.put("/:id", UserController.updateUser);
router.delete("/:id", UserController.deleteUser);

export default router;
