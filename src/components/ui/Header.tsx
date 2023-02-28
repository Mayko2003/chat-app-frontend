import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context';


export const Header = () => {


    const { logout, user } = useContext(AuthContext)

    const navigate = useNavigate();

    const onLogout = () => {
        logout();
        navigate('/login', { replace: true });
    }

    return (
        <nav className="navbar navbar-expand-lg bg-transparent shadow-lg">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src={"assets/icons/mychat-logo.gif"} alt="Mychat Logo" className='mychat-brand-logo' />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbar">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-100">
                        <li className="nav-item">
                            <Link className="nav-link text-light" to="/chat">Chat</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light" to="/discusions">Discusions</Link>
                        </li>
                        <li className="nav-item ms-lg-auto">
                            <Link className="nav-link text-light" to="/logout" onClick={onLogout}>
                                <span className='pe-2'>{user?.['username']}</span>
                                <i className='bi-box-arrow-right btn-logout'></i>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
