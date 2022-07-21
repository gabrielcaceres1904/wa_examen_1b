import { NextApiRequest, NextApiResponse } from "next";
import {conn} from '../../utils/database'


// eslint-disable-next-line import/no-anonymous-default-export
export default async (req:NextApiRequest,res:NextApiResponse)=>{

    const response = await conn.query('SELECT NOW();')
    
    return res.json({message:"pong",time:response.rows[0].now})
}