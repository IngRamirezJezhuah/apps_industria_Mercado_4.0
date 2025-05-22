import express, { Router } from "express";
import { getTimeToken, loginMethod, protectedRoute, updateToken } from "../controller/auth.controller";
import { validateToken } from "../utills/validateToken";

const router = Router();

router.post('/login-user', loginMethod);
router.get('/time/:userId', getTimeToken);

router.get('/protected', validateToken, protectedRoute);
router.put('/update/:userId', updateToken)
export default router;