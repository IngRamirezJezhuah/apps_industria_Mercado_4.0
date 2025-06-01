import express, { Router } from "express";
import { validateToken } from "../utills/validateToken";
import {
    loginMethod,
    getTimeToken,
    saveUser,
    deleteUser,
    updateUser,
    protectedRoute,
    updateToken,
    getAllUsers,
    getUserByName
} from "../controller/auth.controller";


const router = Router();

router.post('/login-user', loginMethod);
router.get('/time/:userId', getTimeToken);

router.get('/protected', validateToken, protectedRoute);
router.put('/update/:userId', updateToken);

router.get('/users', getAllUsers);
router.get('/users/:username', getUserByName); 
router.post('/users', saveUser);
router.delete('/users/delete/:userId', deleteUser);
router.put('/users/update/:userId', updateUser);


export default router; 