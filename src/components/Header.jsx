import SearchIcon from '@mui/icons-material/Search'
import { Avatar } from '@mui/material'
import React from 'react'
import { useDataLayerValue } from '../DataLayer'
import "../Header.css"

function Header() {
    const [{ user }, dispatch] = useDataLayerValue()

    return (
        <div className='header'>
            <div className="header__left">
                <SearchIcon />
                <input type="text" placeholder='Search for Artists, Songs or Podcasts' />
            </div>
            <div className="header__right">
                <Avatar src={user?.images[0]?.url} alt="RR" />
                <h4>{user?.display_name}</h4>
            </div>
        </div>
    )
}

export default Header