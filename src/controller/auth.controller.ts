import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import NodeCache from 'node-cache';
import dayjs from 'dayjs';
import { cache } from '../utills/cache';
import { generateAcessToken } from '../utills/token';
import { User } from '../models/UserModels';
import bcrypt from 'bcrypt';
import { userInfo } from 'os';





export const loginMethod = async (req: Request,res: Response) => {
/*    const name: string = "DJ";
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
    });*/
    //encontre la alternativa pero tengo miedo de que pete, asi que lo dejo
    //ademas es mas facil para mongo usr ese formato
    const { username, password } = req.body;

    const user = await User.findOne({ username, status: true });

    if (!user) {
        return res.status(401).json({ message: "Usuario no encontrado o inactivo" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        return res.status(401).json({ message: "Contraseña incorrecta" });
    }

    const userId = user.id;
    const accessToken = generateAcessToken(userId);

    cache.set(userId, accessToken, 60 * 15);

    return res.status(200).json({
        message: "Login exitoso",
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

export const getAllUsers = async (req: Request, res: Response) => {
    try {
        //const users = await User.find(); creo que debia de haberlo habilitado
        const users = await User.find({status:true});
        return res.status(200).json(users);
    } catch (error) {
        return res.status(500).json({ message: 'Error al obtener los usuarios', error });
    }
};


export const getUserByName = async (req: Request, res: Response) => {
    const { username } = req.params;

    try {
        const user = await User.findOne({ username: username });
        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        return res.status(200).json(user);
    } catch (error) {
        return res.status(500).json({ message: 'Error al buscar el usuario', error });
    }
};

export const saveUser = async (req:Request, res:Response) => {
    const { firstName, lastName, username, email, password, role } = req.body;
    const userExists = await User.findOne({ email });
    if (userExists) {
        return res.status(400).json({ message: "El correo ya está registrado" });
    }

    const hashedPassword = await bcrypt.hash(password, 10); // 10 = salt rounds

    const newUser = new User({
        firstName,
        lastName,
        username,
        password: hashedPassword,
        role,
        email
    });

    const user = await newUser.save();
    return res.json({ user });
}


export const updateUser = async (req: Request, res: Response) => {
    const { userId } = req.params;
    const { username, email, password, role, firstName, lastName } = req.body;
    
    const user = await User.findById(userId);
    if (!user){
        return res.status(404).json({ message: "User not found"});
    }

    const userEmail = await User.findOne({ email });
    if(userEmail&&userEmail.id!==user.id){
        return res.status(426).json({ message: "El correo ya existe" })
    }

    //user.password = password != null ? (password) : user.password;
    if (password != null) {
    user.password = await bcrypt.hash(password, 10);
    }
    user.email = email != null ? email : user.email;
    user.role=role != null ? role : user.role;
    user.firstName=firstName != null ? firstName : user.firstName;
    user.lastName=lastName != null ? lastName : user.lastName;
    user.username=username != null ? username : user.username;

    const updateUser = await user.save();
    return res.json({ updateUser });
}

export const deleteUser=async(req: Request,res: Response) => {
    const { userId } = req.params;

    const user = await User.findById(userId);
    if (!user){
        return res.status(404).json({ message: "User not found"});
    }
    //esto hace que se de de baja logica
    user.status=false;
    user.deleteDate= new Date;

    const deleteUser = await user.save();
    return res.json({ deleteUser });
}
