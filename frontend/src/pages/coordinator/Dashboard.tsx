
import React, { useEffect, useState } from "react";
import api from "../../services/api";

export default function CoordinatorDashboard() {
    const [revenue, setRevenue] = useState<any>(null);
    const [members, setMembers] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        try {
            const [revRes, memRes] = await Promise.all([
                api.get("/dashboard/revenue"),
                api.get("/dashboard/members")
            ]);
            setRevenue(revRes.data);
            setMembers(memRes.data);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    if (loading) return <div>Loading dashboard...</div>;

    return (
        <div className="dashboard">
            <h1>Coordinator Dashboard</h1>

            <div className="stats-grid">
                <div className="stat-card">
                    <h3>Total Generated</h3>
                    <p>R$ {revenue?.totalGenerated / 100}</p>
                </div>
                <div className="stat-card">
                    <h3>My Share (80%)</h3>
                    <p>R$ {revenue?.myShare / 100}</p>
                </div>
                <div className="stat-card">
                    <h3>Active Subscribers</h3>
                    <p>{revenue?.activeSubscribers}</p>
                </div>
            </div>

            <h2>My Members</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Joined</th>
                    </tr>
                </thead>
                <tbody>
                    {members.map(m => (
                        <tr key={m.id}>
                            <td>{m.firstName} {m.lastName}</td>
                            <td>{m.email}</td>
                            <td>{new Date(m.created_at).toLocaleDateString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
