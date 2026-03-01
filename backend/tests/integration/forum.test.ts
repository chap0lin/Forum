
import request from "supertest";
import express from "express";
import { describe, it, expect, vi, beforeEach } from "vitest";
import router from "../../src/api/routes";
import { TopicModel } from "../../src/models/Topic";
import { PostModel } from "../../src/models/Post";

const app = express();
app.use(express.json());
// Mock auth middleware to inject user
app.use((req: any, res, next) => {
    req.user = { id: 1, role: "member" };
    next();
});
app.use("/api", router);

describe("Forum Integration", () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it("should list topics", async () => {
        vi.spyOn(TopicModel, "findAll").mockResolvedValue([
            { id: 1, title: "Test Topic", content: "Content", author_id: 1, created_at: new Date() } as any
        ]);

        const res = await request(app).get("/api/topics");
        expect(res.status).toBe(200);
        expect(res.body).toHaveLength(1);
        expect(res.body[0].title).toBe("Test Topic");
    });

    it("should create a post on a topic", async () => {
        vi.spyOn(TopicModel, "findById").mockResolvedValue({ id: 1 } as any);
        vi.spyOn(PostModel, "create").mockResolvedValue({
            id: 10,
            topic_id: 1,
            author_id: 1,
            content: "Reply",
            created_at: new Date()
        } as any);

        const res = await request(app).post("/api/topics/1/posts").send({
            content: "Reply"
        });

        expect(res.status).toBe(201);
        expect(res.body.content).toBe("Reply");
    });
});
