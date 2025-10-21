import express, { Express } from "express";
import cors from "cors";
import userRoutes from "./users/user.routes"; // Import the user router
import authRoutes from "./auth/auth.routes"; // Import the auth router
import { authenticateToken } from "./auth/auth.middleware"; // 1. Import the middleware

const app: Express = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

// Mount the user router
app.use("/api/auth", authRoutes); // e.g., /api/auth/login
app.use("/api/users", userRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
