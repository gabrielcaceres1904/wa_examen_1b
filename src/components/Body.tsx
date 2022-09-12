import React, {createContext} from 'react';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilledWhite';
import Header from "./Header";
import CardPlaylist from "./Card";



function Body() {

    // @ts-ignore
    return (
        <div className="body">
            <Header/>

            <div className="body__info">

                <div className="body__infoText">
                    <h1>Playlists</h1>
                    <div className="body__cards">
                        <CardPlaylist titulo="Las canciones de tu ex" imagen="sad_doge.jpg" direccion="http://localhost:3000/0"></CardPlaylist>
                        <CardPlaylist titulo="No me toquen ese vals " imagen="valses.jpg" direccion="http://localhost:3000/1"></CardPlaylist>
                        <CardPlaylist titulo="Viejitos pero juntitos" imagen="old.jpg" direccion="http://localhost:3000/2"></CardPlaylist>
                    </div>
                    <h1>Albumes</h1>
                    <div className="body__cards">
                        <CardPlaylist titulo="Vicios y virtudes" imagen="doble_v.jpg" direccion="http://localhost:3000/3"></CardPlaylist>
                        <CardPlaylist titulo="El círculo" imagen="circulo.jpg" direccion="http://localhost:3000/4"></CardPlaylist>
                        <CardPlaylist titulo="Churupaca" imagen="churupaca.jpg" direccion="http://localhost:3000/5"></CardPlaylist>
                    </div>
                    <div className="footer__pusher"/>

                </div>
            </div>


        </div>
    );
}

export default Body;