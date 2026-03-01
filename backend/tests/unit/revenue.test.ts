
import { describe, it, expect, vi, beforeEach } from "vitest";
import { RevenueService } from "../../src/services/RevenueService";
import knex from "../../src/db";

// Mock Knex
vi.mock("../../src/db", () => {
    const mKnex = {
        select: vi.fn().mockReturnThis(),
        where: vi.fn().mockReturnThis(),
        andWhere: vi.fn().mockReturnThis(),
        join: vi.fn().mockReturnThis(),
        reduce: vi.fn(), // Mock for array result usually
    } as any;
    const fn = () => mKnex;
    fn.fn = mKnex; // knex() returns QueryBuilder
    return { default: fn };
});

describe("RevenueService", () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it("should calculate admin revenue correctly", async () => {
        const mockSubs = [
            { amount: 3000 }, // R$ 30,00
            { amount: 3000 },
        ];

        // Mock knex implementation for this test
        // @ts-ignore
        knex().where.mockResolvedValue(mockSubs);

        const result = await RevenueService.calculateAdminRevenue();

        expect(result.totalRevenue).toBe(6000); // 60,00
        expect(result.platformRevenue).toBe(1200); // 20% of 6000
        expect(result.payout).toBe(4800); // 80% of 6000
        expect(result.activeSubscribers).toBe(2);
    });

    // Add more tests for coordinator calc
});
