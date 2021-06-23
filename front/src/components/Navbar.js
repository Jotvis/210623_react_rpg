import React, {useEffect, useState} from 'react';
import {NavLink, Link, useHistory} from "react-router-dom";

const Navbar = () => {
    const [nav, setNav] = useState()
    const history = useHistory()

    const logout = () => {
        localStorage.clear()
        history.push('/')
    }

    useEffect( () => {
        if(localStorage.getItem('secret')) {
            setNav(
                <div>
                    <Link onClick={logout}>Log out</Link>
                </div>
            )
        }
    }, [])

    return (
        <nav className='navbar'>
            <Link to={'/'}>
                <img className='logo' src="https://purepng.com/public/uploads/large/51507140054dtuhninr5avmwmcmquwzdn98yggrobzdka8ljsr9smltikulqb7nc9gpwboydfsstefqhjjcowdxhclsztm0tegsiljpln7y2ijt.png" alt="logo"/>
            </Link>
            {nav}
        </nav>
    );
};

export default Navbar;