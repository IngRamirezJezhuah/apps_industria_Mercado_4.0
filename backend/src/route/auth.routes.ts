import express, { Router } from "express";
import { validateToken } from "../utills/validateToken";
import { loginMethod,getTimeToken,saveUser,deleteUser,updateUser,protectedRoute,updateToken,getAllUsers,getUserByName} from "../controller/auth.controller";
import { getAllOrders ,getOrderById,createOrder,updateOrder,deleteOrder} from "../controller/order.controller";
import { getAllRols } from "../controller/rol.controller";
import { getAllProductos,createProduct,getProductById,updateProduct,deleteProduct } from "../controller/product.controller";


const router = Router();
/*_________user_________ */
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
router.get('/products', getAllProductos);

/*_________Productos_________ */
router.get('/products/:id', getProductById);
router.post('/products', createProduct);
router.put('/products/:id', updateProduct); 
router.delete('/products/:id', deleteProduct);

/*_________ordenes_________ */
router.get('/orders', getAllOrders);
router.get('/orders/:id', getOrderById);
router.post('/orders', createOrder);
router.put('/orders/:id', updateOrder);
router.delete('/orders/:id', deleteOrder);
export default router; 