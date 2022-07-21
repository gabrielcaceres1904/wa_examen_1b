import * as React from 'react';
import Layout from "../components/Layout";
import {Typography} from "@mui/material";






export default function Inicio() {
    return (
        <Layout title_head="Inicio">
            <Typography variant="h2">
                Soy una pagina de Inicio
            </Typography>
            <Typography variant="body1">
                👍 Ignoreme y continue con su camino
            </Typography>
        </Layout>
    );
}