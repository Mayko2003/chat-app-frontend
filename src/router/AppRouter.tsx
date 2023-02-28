import { Routes, Route, Navigate } from 'react-router-dom';
import { ChatPage, SignInPage, SignUpPage } from "../pages"
import { ProtectedRoute, PrivateRoute } from ".";
import { useEffect, useContext, useState } from 'react';
import { AuthContext } from '../context';


export const AppRouter = () => {


    const { checkAuth } = useContext(AuthContext);

    const [checking, setChecking] = useState(true)

    useEffect(() => {

        checkAuth().then(() => {
            setChecking(false)
        })

    }, [])


    return (
        <>
            {
                !checking && <Routes>
                    <Route path="/login" element={<ProtectedRoute><SignInPage /></ProtectedRoute>} />
                    <Route path="/signup" element={<ProtectedRoute><SignUpPage /></ProtectedRoute>} />
                    <Route path="/chat" element={<PrivateRoute><ChatPage /></PrivateRoute>} />

                    <Route path="*" element={<Navigate to="/chat" />} />
                </Routes>
            }
        </>
    )
}
