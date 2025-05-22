import express, { Router } from "express";
import { getTimeToken, loginMethod } from "../controller/auth.controller";

const router = Router();

router.post('/login-user', loginMethod);
router.get('/time/:userId', getTimeToken);

export default router;