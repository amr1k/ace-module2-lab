import { Request, Response } from 'express';
import { db } from '../db';

export const searchProducts = async (req: Request, res: Response) => {
    const { q } = req.query;
    // SECURE: Parameterized Query avoids SQL Injection
    const query = 'SELECT * FROM products WHERE name ILIKE $1';
    const result = await db.query(query, [`%${q}%`]);
    res.status(200).json(result.rows);
};
