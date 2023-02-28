import { useContext } from 'react';
import { AuthContext } from '../context';
import { Navigate } from 'react-router-dom';


export const PrivateRoute = ({ children }: PrivateRouteProps) => {

    const { user } = useContext(AuthContext)

    return (user ? children : <Navigate to="/login" />) as JSX.Element
}

type PrivateRouteProps = {
    children: React.ReactNode
}
