// utils/validateToken.ts
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { cache } from './cache';

const ACCESS_SECRET = 'contraseñasecreta';

export const validateToken = (req: Request, res: Response, next: NextFunction) => {
    // Obtener el token del header
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Access token missing or malformed' });
    }

    const token = authHeader.split(' ')[1];

    try {
        // Verificar token con JWT
        const decoded = jwt.verify(token, ACCESS_SECRET) as { userid: string };

        // Validar si el token aún existe en cache
        const cachedToken = cache.get(decoded.userid);

        if (cachedToken !== token) {
            return res.status(403).json({ message: 'Token expired or not in cache' });
        }

        // Guardar usuario en req para siguientes middlewares o controladores
        req.body = decoded;

        next(); // continuar a la siguiente función
    } catch (error) {
        return res.status(401).json({ message: 'Invalid or expired token' });
    }
};
