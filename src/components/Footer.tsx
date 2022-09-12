import React, {createContext, useEffect, useRef, useState} from 'react';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import {Grid, Slider} from '@material-ui/core';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import AudioPlayer from 'react-h5-audio-player';
import {useRouter} from "next/router";



function Footer() {

    const canciones =[
        {src:'musica/around_the_world.mp3',imagen:"cover/daft.jpg",titulo:"Around the world",artista:"Daft Punk"},
        {src:'musica/angel.mp3',imagen:"cover/elefante.jpg",titulo:"Angel",artista:"Elefante"},
        {src:'musica/counting_stars.mp3',imagen:"cover/one_republic.jpeg",titulo:"Counting Stars",artista:"One Republic"},
        {src:'musica/llorona.mp3',imagen:"cover/chavela.jpg",titulo:"Llorona",artista:"Chavela Vargas"},
        {src:'musica/me_voy.mp3',imagen:"cover/julieta.jpg",titulo:"Me voy",artista:"Julieta Venegas"},
        {src:'musica/negra_mi_vida.mp3',imagen:"cover/pablo.jpg",titulo:"Negra mi vida",artista:"Pablo Terán"},
        {src:'musica/ojos_color_sol.mp3',imagen:"cover/calle_13.jpg",titulo:"Ojos color sol",artista:"Calle 13"},
        {src:'musica/rude.mp3',imagen:"cover/magic.jpg",titulo:"Rude",artista:"Magic"},
        {src:'musica/un_beso_de_desayuno.mp3',imagen:"cover/calle_13.jpg",titulo:"Un beso de desayuno",artista:"Calle 13"},
    ]

    const playlists = [
        [1,2,3],
        [2,3,4],
        [3,4,5],
        [4,5,6],
        [5,6,7],
        [6,7,8],

    ]


    const [currentTrack, setTrackIndex] = useState(0)
    const [song, setSong] = useState("a")
    const [titulo, setTitulo] = useState("a")
    const [autor, setAutor] = useState("a")
    const [imagen, setImagen] = useState("a")
    const [indice, setIndice] = useState(0)



    const handleClickNext = () => {
        console.log('click next')
        setTrackIndex(
            currentTrack < playlists[indice].length - 1 ? currentTrack + 1 : 0
        );
    };

    const handleEnd = () => {
        console.log('end')
        setTrackIndex(
            currentTrack < playlists[indice].length - 1 ? currentTrack + 1 : 0
        );
    }

    useEffect(() => {

        let valor = parseInt(window.location.href.split('/').pop() as string)
        if (isNaN(valor)){
            setIndice(0)
        } else {
            setIndice(valor)
        }

        setSong(canciones[playlists[indice][currentTrack]].src)
        setTitulo(canciones[playlists[indice][currentTrack]].titulo)
        setAutor(canciones[playlists[indice][currentTrack]].artista)
        setImagen(canciones[playlists[indice][currentTrack]].imagen)

    }, [currentTrack,indice])


    return (
        <div>
            <div className="footer">
                <div className="footer__left">
                    <img
                        className="footer__albumLogo"
                        src={imagen}
                        alt=""
                    />
                    <div className="footer__songInfo">
                        <h4>{titulo}</h4>
                        <p>{autor}</p>
                    </div>
                </div>

                <div className="footer__center">
                    <AudioPlayer
                        volume={0.5}
                        src={song}
                        showSkipControls
                        onClickNext={handleClickNext}
                        onEnded={handleEnd}
                        // Try other props!
                        autoPlay={false}
                        showJumpControls={false}
                    />
                </div>

            </div>
        </div>
    );

}

export default Footer;