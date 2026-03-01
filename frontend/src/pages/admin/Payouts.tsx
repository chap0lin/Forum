
import React, { useEffect, useState } from "react";
import api from "../../services/api";

export default function AdminPayouts() {
    const [revenue, setRevenue] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        try {
            const res = await api.get("/admin/payouts");
            setRevenue(res.data);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    if (loading) return <div>Loading payouts...</div>;

    return (
        <div className="dashboard">
            <h1>Admin Payouts</h1>

            <div className="stats-grid">
                <div className="stat-card">
                    <h3>Total Revenue</h3>
                    <p>R$ {revenue?.totalRevenue / 100}</p>
                </div>
                <div className="stat-card">
                    <h3>Platform Revenue (20%)</h3>
                    <p>R$ {revenue?.platformRevenue / 100}</p>
                </div>
                <div className="stat-card">
                    <h3>Coordinator Payouts (80%)</h3>
                    <p>R$ {revenue?.payout / 100}</p>
                </div>
                <div className="stat-card">
                    <h3>Active Subscribers</h3>
                    <p>{revenue?.activeSubscribers}</p>
                </div>
            </div>

            {/* Future: Add list of pending payouts */}
        </div>
    );
}
