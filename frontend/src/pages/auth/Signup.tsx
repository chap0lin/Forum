
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { authApi } from "../../services/api";

export default function Signup() {
    const { state } = useLocation();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        cpf: "",
        phone: "",
    });

    if (!state?.token) {
        return <div>Missing invitation token.</div>;
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const res = await authApi.signup({
                ...formData,
                token: state.token
            });
            // Redirect to payment
            window.location.href = res.data.paymentUrl;
        } catch (err) {
            alert("Signup failed! Check console.");
            console.error(err);
        }
    };

    return (
        <div style={{ maxWidth: 400, margin: "auto", padding: 20 }}>
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name</label>
                    <input
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                    />
                </div>
                <div>
                    <label>Email</label>
                    <input
                        placeholder="Email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                    />
                </div>
                <div>
                    <label>Password</label>
                    <input
                        placeholder="Password"
                        type="password"
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        required
                    />
                </div>
                <div>
                    <label>CPF</label>
                    <input
                        placeholder="000.000.000-00"
                        value={formData.cpf}
                        onChange={(e) => setFormData({ ...formData, cpf: e.target.value })}
                    />
                </div>
                <button type="submit">Proceed to Payment</button>
            </form>
        </div>
    );
}
