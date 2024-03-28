import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import NavBarPanel from './NavBarPanel'
import store from '../store/store'
import { Provider } from 'react-redux';

const RootLayout = () => {
    return (
        <>
            <Provider store={store}>

                <NavBarPanel />
                <main>
                    <Outlet />
                </main>
            </Provider>
        </>
    )
}

export default RootLayout