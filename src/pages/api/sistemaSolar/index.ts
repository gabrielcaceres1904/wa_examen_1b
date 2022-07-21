import {NextApiRequest, NextApiResponse} from 'next'
import {conn} from "../../../utils/database";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {

    const {method, body} = req;


    switch (method) {
        case 'GET':

            const consulta = await conn.query('SELECT * FROM sistema_solar;')

            return res.status(200).json(consulta.rows);

        case 'POST':

            const {nombre_sistema, radio_sistema, satelites_sistema, nombre_sol} = JSON.parse(body);

            const ingreso = 'insert into sistema_solar (nombre_sistema,radio_sistema,satelites_sistema,nombre_sol) values ($1,$2,$3,$4) RETURNING *;'

            const values = [nombre_sistema, radio_sistema, satelites_sistema, nombre_sol]

            const response = await conn.query(ingreso, values)

            return res.status(200).json(response.rows[0]);


        default:
            return res.status(400).json("Invalid Method");
    }


};