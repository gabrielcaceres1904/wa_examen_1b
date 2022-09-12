import React from 'react';
import SidebarOption from './SidebarOption';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';


function Sidebar() {
    return (
        <div className="sidebar">
            <img
                className="sidebar__logo"
                src="logo.png"
                height="500"
                alt=""
            />

            <SidebarOption Icon={HomeIcon} title="Inicio" />
            <SidebarOption Icon={SearchIcon} title="Explorar" />

            <br />
            <strong className="sidebar__title">PLAYLISTS</strong>
            <hr />
            <SidebarOption Icon={HomeIcon} title="Las canciones de tu ex" />
            <SidebarOption Icon={SearchIcon} title="No me toquen ese vals" />
            <SidebarOption Icon={SearchIcon} title="Viejitos pero juntitos" />

        </div>
    );
}

export default Sidebar;