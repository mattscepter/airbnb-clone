import { Avatar } from '@material-ui/core'
import { ExpandMore, Language, Search } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"

function Header() {
    return (
        <div className="header">
            <Link to="/">
                <img src="https://promoaffiliates.com/wp-content/uploads/2017/02/Airbnb-Logo.png" alt="airbnblogo" className="header__icon" />
            </Link>
            <div className="header__centre">
                <input type="text" />
                <Search/>
            </div>
            <div className="header__right">
                <p>Become a host</p>
                <Language/>
                <ExpandMore/>
                <Avatar/>
            </div>
        </div>
    )
}

export default Header
