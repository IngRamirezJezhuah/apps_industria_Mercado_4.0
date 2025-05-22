import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import NodeCache from 'node-cache';
import dayjs from 'dayjs';
import { cache } from '../utills/cache';
import { generateAcessToken } from '../utills/token';


export const loginMethod = (req: Request, res: Response) => {
    const name: string = "DJ";
    const age: number = 30;

    const { username, password } = req.body;

    console.log(username, password)
    if (username !== "admin" || password !== "1234") {
        return res.status(401).json({
            message: "Login incorrect",
        });
    }

    // Creación de token
    const userId = "12345";
    
    const accessToken = generateAcessToken(userId);

    //Cache
    cache.set(userId,accessToken,60*15);
    //ttl-> tiempo de vida

    return res.status(200).json({
        message: "Login successful",
        accessToken
    });
};

export const getTimeToken = (req: Request, res : Response) =>{
    const { userId } =req.params;

    const ttl= cache.getTtl(userId);//timepo de vida
    if (!ttl) {
        return res.status(404).json({
            message:"token invalido oh incorrecto"
        });
    }

    const now = Date.now();
    const timeToLife= Math.floor((ttl-now)/1000);
    const expTime= dayjs(ttl).format("HH:mm:ss");

    return res.status(200).json({
        timeToLife,
        expTime
    })
}

export const protectedRoute = (req: Request, res: Response) => {
    return res.status(200).json({
        message: "Listo,ya esta confirmada creo... ദ്ദി(ᵔᗜᵔ)",
        //userid: req.user?.userid
        userid: req.body
    });
};


export const updateToken = (req: Request, res:Response)=>{
    const { userId } =req.params;
console.log(userId)
    const ttl= cache.getTtl(userId);//timepo de vida
console.log(ttl)

    if (!ttl) {
        return res.status(404).json({
            message:"token invalido oh incorrecto"
        });
    }
    const newTimeToken: number = 60*15;
    //actualizar timepo de vida
    cache.ttl(userId, newTimeToken);
    res.json({message: "update"})
}

    