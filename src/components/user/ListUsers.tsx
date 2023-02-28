import { AuthContext } from "../../context";
import { useGetActiveUsers } from "../../hooks"
import { LoadingSpinner } from '..';
import { UserItem } from "./UserItem";
import { useContext } from 'react';


export const ListUsers = () => {

    const { users, isLoading, error } = useGetActiveUsers();

    const { user: logged } = useContext(AuthContext)

    return (
        isLoading ? <LoadingSpinner /> :
            <>
                <div className="w-100 mx-2 mt-3">
                    <h3 className="text-center">Users</h3>
                    {
                        users.map((user: any, index) => logged?.['username'] !== user.username && < UserItem key={index} user={user} />)
                    }
                </div>
            </>
    )
}
