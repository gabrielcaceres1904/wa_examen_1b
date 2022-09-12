import React from 'react';
import SearchIcon from '@material-ui/icons/Search';


function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <SearchIcon />
                <input
                    placeholder="Search for Artists, Songs or Podcasts"
                    type="text"
                />
            </div>

            <div className="header__right">
            </div>
        </div>
    );
}

export default Header;