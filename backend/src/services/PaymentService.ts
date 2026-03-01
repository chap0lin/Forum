
import { MercadoPagoConfig, Preference } from "mercadopago";

if (!process.env.MERCADOPAGO_ACCESS_TOKEN) {
    // Warn but don't crash in dev if mock is acceptable
    console.warn("MERCADOPAGO_ACCESS_TOKEN is missing. Payment service will fail.");
}

const client = new MercadoPagoConfig({
    accessToken: process.env.MERCADOPAGO_ACCESS_TOKEN || "",
});

export const PaymentService = {
    async createSubscriptionPreference(
        email: string,
        title: string = "Monthly Subscription"
    ): Promise<string> {
        const preference = new Preference(client);

        const result = await preference.create({
            body: {
                items: [
                    {
                        id: "sub-monthly",
                        title: title,
                        quantity: 1,
                        unit_price: 29.90, // Example price, should be config
                    },
                ],
                payer: {
                    email: email,
                },
                back_urls: {
                    success: "http://localhost:5173/auth/callback?status=success",
                    failure: "http://localhost:5173/auth/callback?status=failure",
                    pending: "http://localhost:5173/auth/callback?status=pending",
                },
                auto_return: "approved",
            },
        });

        if (!result.init_point) {
            throw new Error("Failed to create preference");
        }

        return result.init_point;
    },

    // In production, we would handle webhooks here
    async verifyPayment(paymentId: string): Promise<boolean> {
        // Mock verification for now or implement get payment status
        return true;
    }
};
