

export const ErrorNotification = ({ message }: NotificationProps) => {

    const hideNotification = (e: any) => {
        const parent = e.parentElement;

        parent.classList.add('d-none')

    }

    return (
        <div className="col-10 col-lg-4 mx-auto alert alert-danger mt-3 p-1 d-flex" role="alert">
            <span className="ms-1 mt-1">{message}</span>
            <i className="bi-x ms-auto" style={{ fontSize: "1.3em" }} onClick={e => hideNotification(e.target)}></i>
        </div>
    )
}

type NotificationProps = {
    message: string
}