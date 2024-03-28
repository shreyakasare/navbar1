import React, { useState } from 'react'
import Users from './Users'
import UserContext from './Context/UserContext'

const UsersDashboard = () => {
    debugger
    const [user, setUsers] = useState("Shreya");

    const users = {
        userName: user,
        updateName: setUsers
    }

    return (
        <UserContext.Provider value={users}>
            <div>Users Dashboard</div>
            {/* <button onClick={() => setUsers('Shreya Kasare')}>Update Name</button> */}
            <Users />
        </UserContext.Provider>
    )
}

export default UsersDashboard