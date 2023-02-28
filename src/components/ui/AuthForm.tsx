import { useForm } from 'react-hook-form';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from "../../context";
import { ErrorNotification, InputFormError } from ".."



export const AuthForm = ({ type }: AuthFormProps) => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const { login, user, register: registerUser } = useContext(AuthContext);

    const [error, setError] = useState(null)

    const navigate = useNavigate();

    const onSubmit = (data: any) => {

        if (type)
            login(data.username, data.password).then(() => {
                navigate('/chat', { replace: true })
            }).catch(err => {
                setError(err.message)
            })
        else
            registerUser(data.username, data.password).then(() => {
                navigate('/login', { replace: true })
            }).catch(err => {
                setError(err.message)
            })
    }


    return (
        <>
            {error && <ErrorNotification message={error as string} />}

            <form className="col-10 col-lg-4 mx-auto glass-container p-4" onSubmit={handleSubmit(onSubmit)} >
                <div className="mb-3">
                    <label className="form-label" htmlFor="username">{!type && 'Enter your '}Username</label>
                    <input
                        className="form-control mychat-form-control"
                        type="text"
                        id="username"
                        {...register("username", { required: 'Username is required' })}
                    />
                    {errors.username && <InputFormError message={errors.username.message as string} />}
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="password">{!type && 'Enter your '}Password</label>
                    <input
                        className="form-control mychat-form-control"
                        type="password"
                        id="password"
                        {...register("password", { required: 'Password is required' })}
                    />
                    {errors.password && <InputFormError message={errors.password.message as string} />}
                </div>
                <div className="d-flex justify-content-center">
                    <button className='btn mychat-btn' type='submit'>{type ? 'Sign in' : 'Register'}</button>
                </div>
            </form>
        </>
    )
}

type AuthFormProps = {
    type: boolean
}