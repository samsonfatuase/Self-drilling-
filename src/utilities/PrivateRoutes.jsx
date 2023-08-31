import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const PrivateRoutes = () => {
    let auth = { token: true};
    return (
        <div>
            {auth.token ? <Outlet /> : <Navigate to="/login" />}
        </div>
    );
};

export default PrivateRoutes;
