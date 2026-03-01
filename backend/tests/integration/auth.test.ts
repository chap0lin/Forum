
import request from "supertest";
import express from "express";
import { describe, it, expect, vi, beforeEach } from "vitest";
import router from "../../src/api/routes";
import { InvitationModel } from "../../src/models/Invitation";
import { UserModel } from "../../src/models/User";
import { PaymentService } from "../../src/services/PaymentService";

// Mock Payment Service
vi.mock("../../src/services/PaymentService", () => ({
    PaymentService: {
        createSubscriptionPreference: vi.fn().mockResolvedValue("http://mock.payment.url"),
    },
}));

const app = express();
app.use(express.json());
app.use("/api", router);

describe("Auth Integration", () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it("should validate a valid invite token", async () => {
        // Mock DB calls
        vi.spyOn(InvitationModel, "findByToken").mockResolvedValue({
            id: 1,
            token: "valid-token",
            create_by_id: 1,
            is_revoked: false,
        });
        vi.spyOn(UserModel, "findById").mockResolvedValue({
            id: 1,
            email: "coord@test.com",
            role: "coordinator",
            firstName: "Coord",
        } as any);

        const res = await request(app).get("/api/auth/invite/valid-token");

        expect(res.status).toBe(200);
        expect(res.body.valid).toBe(true);
        expect(res.body.coordinator.firstName).toBe("Coord");
    });

    it("should allow signup with valid token", async () => {
        // Mock DB calls
        vi.spyOn(InvitationModel, "findByToken").mockResolvedValue({
            id: 1,
            token: "valid-token",
            create_by_id: 1,
            is_revoked: false,
        });
        vi.spyOn(UserModel, "findByEmail").mockResolvedValue(undefined); // No existing user
        vi.spyOn(UserModel, "create").mockResolvedValue({
            id: 2,
            email: "new@test.com",
            role: "member",
        } as any);

        const res = await request(app).post("/api/auth/signup").send({
            token: "valid-token",
            email: "new@test.com",
            password: "password123",
            name: "New User",
            cpf: "12345678900",
        });

        expect(res.status).toBe(200);
        expect(res.body.paymentUrl).toBe("http://mock.payment.url");
        expect(PaymentService.createSubscriptionPreference).toHaveBeenCalled();
    });
});
