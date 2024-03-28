import React, { createContext } from 'react'
import Cons from './Cons';

const FirstName = createContext();
const LastName = createContext();

const Context = () => {
    return (
        <>
            <FirstName.Provider value={'Context'}>
                <LastName.Provider value={'API'}>
                    <Cons />
                </LastName.Provider>
            </FirstName.Provider >
        </>
    )
}

export default Context
export { FirstName, LastName }