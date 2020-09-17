import React from 'react'
import VideoCallSharpIcon from '@material-ui/icons/VideoCallSharp';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from "@material-ui/core/Avatar";

import './Header.css';
import App from './App';

function Header() {
    return (

    <>    
        <div className="header">

            <div className="header_left">
                <MenuIcon />
                <img className="header__logo" src="https://www.youtube.com/about/static/svgs/icons/brand-resources/YouTube-logo-full_color_light.svg?cache=72a5d9c" alt="youtube-logo" />
            </div>

            <div className="header_input">
                <input type="text" placeholder="Search" />
                <SearchIcon className="header__inputButton" />
            </div>

            <div className="header_icons">
                <VideoCallSharpIcon className="header__icon" />
                <AppsIcon className="header__icon" />
                <NotificationsIcon className="header__icon" />
                <Avatar
                    alt="avatar"
                    src="https://www.deccanherald.com/sites/dh/files/article_images/2020/05/19/Mahesh%20Babu-1058781484-1582788558.jpg"
                />
            </div>

        </div>

    </>    
        
    )
}

export default Header
