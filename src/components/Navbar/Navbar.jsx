import './navbar.css'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="left"><span className="logo">Lamasocial</span></div>
            <div className="center">
                <div className="searchBar">
                    <input type="text" placeholder='Search for friend, post or video...' />
                    <SearchIcon className="search-icon" />
                    <span className='center-span'>Home</span>
                    <span className='center-span'>Timeline</span>
                </div>
            </div>
            <div className="right">
                <ul>
                    <li>
                        <PersonIcon className='navbar-icon' />
                        <span className='span-count'>1</span>
                    </li>
                    <li><MessageIcon className='navbar-icon' /><span className='span-count'>1</span></li>
                    <li><NotificationsIcon className='navbar-icon' /><span className='span-count'>1</span></li>
                </ul>
                <img src="assets/person/1.jpeg" className='user' />
            </div>
        </div>
    )
}

export default Navbar