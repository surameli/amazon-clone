import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { DataContext } from '../DataProvider/DataProvider';

function ProtectedRoute({ children, message, redirect }) {
    const navigate = useNavigate();
    const [{ user }] = useContext(DataContext); // ✅ Use useContext, not useState

    useEffect(() => {
        if (!user) {
            navigate("/auth", { state: { message, redirect } });
        }
    }, [user, navigate, message, redirect]); // ✅ Dependencies added

    return user ? children : null; // ✅ Only render children if user exists
}

export default ProtectedRoute;
