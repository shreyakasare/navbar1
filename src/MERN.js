import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './mern.css';
import ProductList from './components/ProductList';

const MERN = () => {
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        navigate('/signup')
    }

    return (
        <div>
            {
                auth ?
                    <ul className='nav-ul'>
                        <li><Link to='/productList' element={<ProductList />} activestyle="true">Products</Link></li>
                        <li><Link to='/add' activestyle="true">Add Products</Link></li>
                        <li><Link to='/update' activestyle="true">Update Products</Link></li>
                        <li><Link to='/profile' activestyle="true">Profile</Link></li>
                        <li><Link onClick={logout} to='/signup'>Logout({JSON.parse(auth).name})</Link></li>
                    </ul>
                    :
                    <ul className='nav-ul'>
                        <li>
                            <Link to='/signup'>Logout</Link></li>
                        <li><Link to='/loginm'>Log In</Link></li>
                    </ul>
            }
        </div>
    )
}

export default MERN