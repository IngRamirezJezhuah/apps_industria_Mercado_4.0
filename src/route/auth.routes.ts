import express, { Router } from "express";
import { getTimeToken,saveUser, loginMethod, protectedRoute, updateToken , getAllUsers, getUserByName  } from "../controller/auth.controller";
import { validateToken } from "../utills/validateToken";


const router = Router();

router.post('/login-user', loginMethod);
router.get('/time/:userId', getTimeToken);

router.get('/protected', validateToken, protectedRoute);
router.put('/update/:userId', updateToken);

router.get('/users', getAllUsers);
router.get('/users/:username', getUserByName); 
router.post('/users', saveUser);

export default router;