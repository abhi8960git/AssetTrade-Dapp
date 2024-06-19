import fs from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';

export default function handler(req: any, res: any) {
    if (req.method === 'POST') {
        const { wallet_addr, associated_marketplace_addr, cw721_addr } = req.body;

        const filePath = path.join(process.cwd(), 'data.json');
        const jsonData = fs.readFileSync(filePath, 'utf-8');
        const data = JSON.parse(jsonData);

        const newLandowner = {
            _id: uuidv4(),
            wallet_addr,
            cw721_addr,
            associated_marketplace_addr,
            lands: []
        };

        data.landowners.push(newLandowner);

        fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

        res.status(201).json(newLandowner);
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
