import express, { Router } from "express";
import { validateToken } from "../utills/validateToken";
import { loginMethod,getTimeToken,saveUser,deleteUser,updateUser,protectedRoute,updateToken,getAllUsers,getUserByName} from "../controller/auth.controller";
import { getAllOrders } from "../controller/order.controller";
import { getAllRols } from "../controller/rol.controller";
import { getAllProductos,createProduct,getProductById,updateProduct,deleteProduct } from "../controller/product.controller";
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
router.get('/order', getAllOrders);
router.get('/rol', getAllRols);
router.get('/products', getAllProductos)

router.get('/products/:id', getProductById); // obtener por ID
router.post('/products', createProduct); // crear
router.put('/products/:id', updateProduct); // actualizar
router.delete('/products/:id', deleteProduct); // baja lógica


export default router; 