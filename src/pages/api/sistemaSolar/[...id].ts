import {NextApiRequest, NextApiResponse} from 'next'
import {conn} from "../../../utils/database";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {

    const {method, query, body} = req;


    // @ts-ignore
    if (query.id.length === 1) {

        switch (method) {
            case 'GET':
                let text_get = ""

                if (query.planetas=="true") {
                    text_get = 'SELECT * FROM planeta WHERE id_sistema = $1;'

                } else {
                    text_get = 'SELECT * FROM sistema_solar WHERE id_sistema = $1;'
                }
                // @ts-ignore
                const values_get = [parseInt(query.id[0])];

                const get = await conn.query(text_get, values_get)

                return res.status(200).json(get.rows);


            case 'PUT':

                const text_put = 'update sistema_solar SET nombre_sistema = $1, radio_sistema= $2, satelites_sistema=$3, nombre_sol=$4 WHERE id_sistema=$5 RETURNING *;'

                const {nombre_sistema, radio_sistema, satelites_sistema, nombre_sol} = JSON.parse(body);
                // @ts-ignore
                let values_put = [nombre_sistema, radio_sistema, satelites_sistema, nombre_sol, query.id[0]]

                const put = await conn.query(text_put, values_put)

                return res.status(200).json(put.rows);

            case 'DELETE':

                const text_delete = 'delete from sistema_solar WHERE id_sistema=$1 RETURNING *;'
                // @ts-ignore
                const values_delete = [parseInt(query.id[0])];

                const delete_query = await conn.query(text_delete, values_delete)

                return res.status(200).json(delete_query.rows);

            case 'POST':
                const {nombre_planeta, radio_planeta, duracion_dia, lunas, es_habitable} = JSON.parse(body);

                const text_post = 'INSERT into planeta (id_sistema,nombre_planeta, radio_planeta, duracion_dia, lunas, es_habitable) values ($1,$2,$3,$4,$5,$6) RETURNING *'
                // @ts-ignore
                const values_post = [parseInt(query.id[0]), nombre_planeta, radio_planeta, duracion_dia, lunas, es_habitable]

                const post_query = await conn.query(text_post, values_post)

                return res.status(200).json(post_query.rows);

            default:
                return res.status(400).json("Invalid Method");
        }
        // @ts-ignore
    } else if (query.id.length === 2) {

        switch (method) {
            case 'GET':
                let text_get = 'SELECT * FROM planeta WHERE id_sistema = $1 and id_planeta = $2;'

                // @ts-ignore
                const values_get = [parseInt(query.id[0]),parseInt(query.id[1])];

                const get = await conn.query(text_get, values_get)

                return res.status(200).json(get.rows);


            case 'PUT':
                const {nombre_planeta, radio_planeta, duracion_dia, lunas, es_habitable} = JSON.parse(body);

                const text_put = 'update planeta SET nombre_planeta=$1, radio_planeta=$2, duracion_dia=$3, lunas=$4, es_habitable=$5  WHERE id_sistema = $6 and id_planeta = $7 RETURNING *;'

                // @ts-ignore
                let values_put = [nombre_planeta, radio_planeta, duracion_dia, lunas, es_habitable, query.id[0],query.id[1]]

                const put = await conn.query(text_put, values_put)

                return res.status(200).json(put.rows);


            case 'DELETE':

                const text_delete = 'delete from planeta  WHERE id_sistema = $1 and id_planeta = $2 RETURNING *;'
                // @ts-ignore
                const values_delete = [parseInt(query.id[0]),parseInt(query.id[1])];

                const delete_query = await conn.query(text_delete, values_delete)

                return res.status(200).json(delete_query.rows);

            default:
                return res.status(400).json("Invalid Method");
        }

    } else {

        return res.status(404).json("We cant go deeper");
    }


};


/*
{
    "id_sistema":3,
    "nombre_planeta":"a",
    "radio_planeta":2,
    "duracion_dia":10,
    "lunas":2,
    "es_habitable":"TRUE"
}
*/