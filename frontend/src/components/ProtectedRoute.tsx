import React from "react";
import { Navigate, Outlet } from "react-router-dom";

interface ProtectedRouteProps {
    allowedRoles?: string[];
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = (/* { allowedRoles } */) => {
    const token = localStorage.getItem("token");

    if (!token) {
        return <Navigate to="/login" replace />;
    }

    // TODO: Decode token to check for roles if needed in the future
    // const user = decode(token);
    // if (allowedRoles && !allowedRoles.includes(user.role)) {
    //   return <Navigate to="/" replace />;
    // }

    return <Outlet />;
};

export default ProtectedRoute;
