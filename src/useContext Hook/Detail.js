import React, { useContext } from 'react'
import UserContext from './Context/UserContext'

const Detail = () => {
    const { updateName } = useContext(UserContext);
    return (
        <>
            <div>Detail</div>
            <button onClick={() => updateName('Shreya Kasare')}>Update Name</button>
        </>
    )
}

export default Detail