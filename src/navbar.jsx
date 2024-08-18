import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
    return (
        <nav className='navbar'>
            <ul>
                <li className='mainitem'>
                    <Link to="/">Home</Link>
                </li>
                <li className='mainitem'>
                    <Link to="#">2023</Link>
                    <div className='dropdown'>
                        <ul>
                            <li><Link to="/2023_dussera">Dussehera</Link></li>
                            <li><Link to="/2023_onam">Onam</Link></li>
                            <li><Link to="/2023_sankranthi">Sankranthi</Link></li>
                        </ul>
                    </div>
                </li>
                <li className='mainitem'>
                    <Link to="#">2022</Link>
                    <div className='dropdown'>
                        <ul>
                            <li><Link to="/2022_dussera">Dussehera</Link></li>
                            <li><Link to="/2022_onam">Onam</Link></li>
                            <li><Link to="/2022_sankranthi">Sankranthi</Link></li>
                        </ul>
                    </div>
                </li>
                <li className='mainitem'>
                    <Link to="#">Contact us</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
