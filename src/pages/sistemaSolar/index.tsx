import {
    Box,
    Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from '@mui/material';
import * as React from 'react';
import Layout from "../../components/Layout";
import { useState } from 'react';



interface Props {
    lista: any[]
}

export default function index(props: Props) {

    let [open, setOpen] = useState(false);

    let [id, setId] = useState(0);



    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleCloseYes = async () => {
        setOpen(false);
        console.log(await borrarSistema(JSON.stringify(id)))
        location.reload();
    };

    const handleCloseNo = () => {
        setOpen(false);
    };


    return (

        <Layout title_head="Sistemas Solares">

            <Box display="flex"
                 justifyContent="flex-end"
                 alignItems="flex-end"
                 marginY={3}
            >
                <Button
                    href="sistemaSolar/nuevo"
                    variant="contained"
                >
                    Crear un nuevo sistema solar
                </Button>
            </Box>

            <TableContainer component={Paper}>
                <Table sx={{minWidth: 650}} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                <Typography variant='h6'>
                                    ID
                                </Typography>
                            </TableCell>
                            <TableCell align="center">
                                <Typography variant='h6'>
                                    Sistema Solar
                                </Typography>

                            </TableCell>
                            <TableCell align="center">
                                <Typography variant='h6'>
                                    Radio del Sistema Solar
                                </Typography>
                            </TableCell>
                            <TableCell align="center">
                                <Typography variant='h6'>
                                    Numero de Satelites
                                </Typography>
                            </TableCell>
                            <TableCell align="center">
                                <Typography variant='h6'>
                                    Nombre del Sol
                                </Typography>
                            </TableCell>
                            <TableCell align="center">
                                <Typography variant='h6'>
                                    Acciones
                                </Typography>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.lista.map((row) => (
                            <TableRow
                                key={row.id_sistema}
                                sx={{'&:last-child td, &:last-child th': {border: 0}}}
                            >
                                <TableCell component="th" scope="row">
                                    {row.id_sistema}
                                </TableCell>
                                <TableCell align="center">{row.nombre_sistema}</TableCell>
                                <TableCell align="center">{row.radio_sistema}</TableCell>
                                <TableCell align="center">{row.satelites_sistema}</TableCell>
                                <TableCell align="center">{row.nombre_sol}</TableCell>
                                <TableCell align="center">
                                    <Button
                                        variant="contained"
                                        href={"/sistemaSolar/"+row.id_sistema}
                                    >
                                        Planetas
                                    </Button>
                                    <Button
                                        variant="contained"
                                        onClick={()=>{
                                            setId(row.id_sistema)
                                            handleClickOpen()
                                        }}
                                    >
                                        Eliminar
                                    </Button>
                                    <Button
                                        variant="contained"
                                        href={"/sistemaSolar/editar/"+row.id_sistema}
                                    >
                                        Editar
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <Dialog
                open={open}
                onClose={handleCloseNo}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">¿Esta seguro que quiere borrar el sistema de id {id} y  todos sus planetas?</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Se borrara el sistema y a todos los planetas que pertenezcan a él, esta accion no se puede deshacer
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseNo} variant="contained" color="secondary">
                        Cancelar
                    </Button>
                    <Button onClick={handleCloseYes}  variant="contained" color="secondary">
                        Confirmar
                    </Button>
                </DialogActions>
            </Dialog>

        </Layout>



    )



}

export const getServerSideProps = async () => {

    const res = await fetch('http://localhost:3000/api/sistemaSolar')

    const sistemas = await res.json()

    return {
        props: {
            lista: sistemas,
        },
    };

}

export async function borrarSistema(id:any) {

    const response = await fetch("http://localhost:3000/api/sistemaSolar/"+id, {
        method: 'DELETE',
    });

    return await response.json()
}