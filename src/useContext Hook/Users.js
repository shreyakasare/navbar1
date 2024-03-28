import React, { useContext } from 'react'
import Detail from './Detail'
import UserContext from './Context/UserContext'

const Users = () => {
    debugger
    const data = useContext(UserContext)
    console.log('data :>> ', data);
    return (
        <>
            <div>Users : {data.userName}</div>
            <Detail />
        </>
    )
}

export default Users