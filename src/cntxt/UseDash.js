import { useState } from "react"
import USeCntxt from "./Cntxt/USeCntxt";

const UseDash = () => {

    const [user, setUsers] = useState('AAA');

    const users = {
        userName: user,
        updateName: setUsers
    }

    return (
        <USeCntxt.Provider value={users}>
            <div>Dashboard</div>
            <></>
        </USeCntxt.Provider>
    )
}

export default UseDash
