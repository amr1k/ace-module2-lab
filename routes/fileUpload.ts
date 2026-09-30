import { Request, Response } from 'express';
import path from 'path';
export const upload = (req: Request, res: Response) => {
    if (!req.file) return res.status(400).send('No file.');
    const safe = path.basename(req.file.originalname);
    res.status(200).send({ safePath: path.join('/tmp', safe) });
};
