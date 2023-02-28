type InputFormErrorProps = {
    message: string
}

export const InputFormError = ({ message }: InputFormErrorProps) => {
    return (
        <div className="alert alert-danger mt-3 p-1" role="alert">
            {message}
        </div>
    )
}
