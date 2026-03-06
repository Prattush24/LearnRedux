import { useSelector } from "react-redux"

export default function UserInfo() {
    const data = useSelector((state)=>state.user)
    return(
        <div>
            <h1>User Info</h1>
            <p>Username: {data.username}</p>
            <p>Balance: {data.balance}</p>
        </div>
    )

    }