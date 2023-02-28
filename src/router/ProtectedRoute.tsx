import { useContext } from 'react';
import { AuthContext } from '../context';
import { Navigate } from 'react-router-dom';


export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {

    const { user } = useContext(AuthContext)


    return (user ? <Navigate to={'/chat'} /> : children) as JSX.Element
}

type ProtectedRouteProps = {
    children: React.ReactNode
}
