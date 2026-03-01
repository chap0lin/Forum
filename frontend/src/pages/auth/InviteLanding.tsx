
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { authApi } from "../../services/api";

export default function InviteLanding() {
    const { token } = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [coordinatorName, setCoordinatorName] = useState("");

    useEffect(() => {
        if (!token) return;
        authApi.validateInvite(token)
            .then((res) => {
                setCoordinatorName(res.data.coordinator.firstName); // Assuming firstName exists
                setLoading(false);
            })
            .catch((err) => {
                setError("Invalid or expired invitation.");
                setLoading(false);
            });
    }, [token]);

    const handleProceed = () => {
        navigate("/signup", { state: { token, coordinatorName } });
    };

    if (loading) return <div>Validating invitation...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div style={{ maxWidth: 400, margin: "auto", padding: 20 }}>
            <h1>You're Invited!</h1>
            <p>{coordinatorName} has invited you to join the private forum.</p>
            <button onClick={handleProceed}>Create Account</button>
        </div>
    );
}
