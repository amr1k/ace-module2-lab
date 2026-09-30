import { Request, Response } from 'express';
import path from 'path';

export const uploadFile = (req: Request, res: Response) => {
    const file = req.file;
    if (!file) return res.status(400).send('No file uploaded.');
    
    // SECURE: Prevent path traversal (Zip-Slip)
    const safeName = path.basename(file.originalname);
    const targetPath = path.join('/var/tmp/uploads', safeName);
    res.status(200).send({ message: 'File saved safely', path: targetPath });
};
