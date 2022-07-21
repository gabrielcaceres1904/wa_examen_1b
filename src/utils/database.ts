import {Pool} from 'pg'

let conn: any

if (!conn){
    conn = new Pool({
        user: 'postgres',
        password: '12345',
        host: 'localhost',
        port: 5432,
        database:'WebAvanzada'
     });

}

export {conn};