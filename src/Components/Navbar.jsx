import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className='phone-container'>
                <a className='phone' href="tel:+0790001918" title='شماره تماس خلیفه'>0790001918</a>
                <a className='phone' href="tel:+0787944885" title='شماره تماس خلیفه'>0787944885</a>
            </div>
            <Link to={"/"} className='shop-name' title='صفحه اصلی'>فلز کاری حیدری</Link>
        </nav>
    )
}

export default Navbar;