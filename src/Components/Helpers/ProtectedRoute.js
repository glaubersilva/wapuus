import React from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../../UserContext";

const ProtectedRoute = ({ children }) => {
    const { login } = React.useContext(UserContext);

    if (login === true) return children;
    if (login === false) return <Navigate to="/login" />;
    return null;
};

export default ProtectedRoute;
