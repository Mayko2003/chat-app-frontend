import { Link } from 'react-router-dom';
import './styles.css';
import { AuthForm } from '../components';

export const SignUpPage = () => {
    return (
        <div>
            <img src={"assets/icons/mychat-logo.gif"} alt="Mychat Logo" className='mychat-logo d-flex mx-auto mt-4' />
            <h1 className='text-center'>Welcome to MyChat</h1>


            <AuthForm type={false} />

            <div className='col-10 col-lg-4 mx-auto mt-4 glass-container p-4'>
                Already have an account? <Link to={'/login'} className='mychat-link' >Sign in</Link>
            </div>
        </div>
    )
}
