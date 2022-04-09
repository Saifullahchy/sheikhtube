import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import Button from './Button/Button';
import Dropdown from './dropdown/Dropdown';
import './Navbar.css';


const NavBar = () => {

    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(true);
        }
    };

    const onMouseLeave = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(false);
        }
    };
    return (
        <>
            <nav className='navbar'>
                <Link to='/' className='navbar-logo'>
                    <img src={Logo} height="80px" width="auto" alt="logo" />
                </Link>

                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fa fa-times' : 'fa fa-bars'} />
                </div>

                <ul className={click ? 'nav-menu active' : 'nav-menu'}>

                    <li className="nav-item " >
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                            Products
                        </Link>
                    </li>
                    <li className="nav-item" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                        <Link to='/order' className='nav-links' onClick={closeMobileMenu}>
                            Order <i className='fas fa-caret-down' />
                        </Link>
                        {dropdown && <Dropdown />}
                    </li>

                    <li className="nav-item">
                        <Link to='/news' className='nav-links' onClick={closeMobileMenu}>
                            News
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/about-us' className='nav-links' onClick={closeMobileMenu}>
                            About Us
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                            Contact
                        </Link>
                    </li>

                </ul>
                <Link to='/dashboard' className='sign-in-btn'>
                    <Button />
                </Link>
            </nav>
        </>
    )
}

export default NavBar