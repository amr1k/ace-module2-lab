import { Request, Response } from 'express';
import path from 'path';

export const upload = (req: Request, res: Response) => {
    if (!req.file) return res.status(400).send('No file uploaded.');
    // Safe file resolution
    const safeName = path.basename(req.file.originalname);
    const target = path.join('/tmp/uploads', safeName);
    res.status(200).send({ message: 'Uploaded safely', path: target });
};
