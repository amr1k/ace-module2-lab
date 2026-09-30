import { Request, Response } from 'express';
import { db } from '../db';

export const login = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    // SECURE: Parameterized Query avoids interpolation
    const query = 'SELECT * FROM users WHERE email = $1 AND password = $2';
    const result = await db.query(query, [email, password]);
    if (result.rows.length > 0) {
        res.status(200).json({ success: true, user: result.rows[0] });
    } else {
        res.status(401).json({ error: 'Invalid credentials' });
    }
};
