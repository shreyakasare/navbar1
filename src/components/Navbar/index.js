import React, { createContext } from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from './NavbarElements';

export const ThemeContext = createContext(null);

const Navbar = () => {
    return (
        <>
            <Nav>
                <Bars />
                <NavMenu>
                    <NavLink to='/about' activestyle="true">
                        About
                    </NavLink>
                    <NavLink to='/cntxt' activestyle="true">
                        Context API
                    </NavLink>
                    <NavLink to='/hikeCalc' activestyle="true">
                        Hike Calculator
                    </NavLink>
                    <NavLink to='/product' activestyle="true">
                        Cart App
                    </NavLink>
                    <NavLink to='/team' activestyle="true">
                        Teams
                    </NavLink>
                    <NavLink to='/blogs' activestyle="true">
                        Blogs
                    </NavLink>
                    <NavLink to='/sign-up' activestyle="true">
                        Sign Up
                    </NavLink>

                    <NavLink to='/cart' activestyle="true">
                        Cart
                    </NavLink>
                    <NavLink to='/dashboard' activestyle="true">
                        Dashboard
                    </NavLink>
                    <NavLink to='/cssstudy' activestyle="true">
                        CSS
                    </NavLink>
                    <NavLink to='/login' activestyle="true">
                        Login
                    </NavLink>

                    {/* <div>
                        <img src={img} alt="" ></img>
                    </div> */}

                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='/signin'>Sign In</NavBtnLink>
                </NavBtn>
            </Nav>


        </>
    );
};

export default Navbar;
