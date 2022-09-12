import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea, CardActions} from '@mui/material';
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilledWhite";
import Audio from "ts-audio";
import {createContext} from "react";

const Name = createContext("a");

interface CardProps {
    imagen: string;
    titulo: string;
    direccion: string;

}



export default function CardPlaylist(props:CardProps) {

    return (
        <Card sx={{width: 150, margin: 1}}>
            <CardActionArea onClick={()=>window.location.replace(props.direccion)}>
                <CardMedia
                    component="img"
                    image={props.imagen}
                    alt={props.titulo}
                    width={150}
                    height={150}
                />
                <CardContent>
                    <Typography gutterBottom variant="body1">
                        {props.titulo}
                    </Typography>
                </CardContent>
                <PlayCircleFilledIcon className="body__shuffle" />
            </CardActionArea>
        </Card>
    );
}