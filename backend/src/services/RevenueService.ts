
import { SubscriptionModel } from "../models/Subscription";
import knex from "../db";

export const RevenueService = {
    // Constants
    PLATFORM_FEE_PERCENT: 0.20, // 20% to Platform
    COORDINATOR_SHARE_PERCENT: 0.80, // 80% to Coordinator

    async calculateRevenue(userId: number, role: "admin" | "coordinator") {
        if (role === "admin") {
            return this.calculateAdminRevenue();
        } else {
            return this.calculateCoordinatorRevenue(userId);
        }
    },

    async calculateAdminRevenue() {
        // Total Active Subscriptions
        const subscriptions = await knex("subscriptions").where({ status: "active" });
        const totalRevenue = subscriptions.reduce((acc, sub) => acc + sub.amount, 0);

        // Revenue Split
        const platformRevenue = totalRevenue * this.PLATFORM_FEE_PERCENT;
        const payout = totalRevenue * this.COORDINATOR_SHARE_PERCENT;

        return {
            totalRevenue,
            platformRevenue,
            payout,
            activeSubscribers: subscriptions.length
        };
    },

    async calculateCoordinatorRevenue(coordinatorId: number) {
        // Find users linked to this coordinator matches
        // In our model we linked users to coordinator via linked_coordinator_id
        // But we need to join subscriptions
        const subscriptions = await knex("subscriptions")
            .join("users", "subscriptions.user_id", "users.id")
            .where("users.linked_coordinator_id", coordinatorId)
            .andWhere("subscriptions.status", "active")
            .select("subscriptions.amount");

        const totalGenerated = subscriptions.reduce((acc, sub) => acc + sub.amount, 0);
        const myShare = totalGenerated * this.COORDINATOR_SHARE_PERCENT;

        return {
            totalGenerated,
            myShare,
            activeSubscribers: subscriptions.length
        };
    },

    async getMembers(coordinatorId: number) {
        return knex("users")
            .where({ linked_coordinator_id: coordinatorId })
            .select("id", "firstName", "lastName", "email", "created_at");
    }
};
