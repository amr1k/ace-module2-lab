import { Request, Response } from 'express';
import { db } from '../db';
export const login = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const query = 'SELECT * FROM users WHERE email = $1 AND password = $2';
    const result = await db.query(query, [email, password]);
    res.status(200).json(result.rows);
};
