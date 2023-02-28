import { Link } from 'react-router-dom';
import './styles.css';
import { AuthForm } from '../components';

export const SignInPage = () => {

    

    return (
        <div>
            <img src={"assets/icons/mychat-logo.gif"} alt="Mychat Logo" className='mychat-logo d-flex mx-auto mt-4' />
            <h1 className='text-center'>Sign in to MyChat</h1>


            <AuthForm type={true} />


            <div className='col-10 col-lg-4 mx-auto mt-4 glass-container p-4'>
                New to MyChat? <Link to={'/signup'} className='mychat-link' >Create an account</Link>
            </div>
        </div>
    )
}
