import { Request,Response } from "express";
import { Order } from "../models/orderModel";

export const getAllOrders = async (req:Request,res:Response) => {
    try{
        const order = await Order.find({status:true});
        return res.status(200).json(order);
    } catch (error){
        return res.status(500).json({message:'ni pez esto vaina no jalo'})
    }
}


// Obtener una orden por ID
export const getOrderById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const order = await Order.findById(id).populate('idUser', 'username');
        if (!order || !order.status) {
            return res.status(404).json({ message: 'Orden no encontrada' });
        }
        return res.status(200).json(order);
    } catch (error) {
        return res.status(500).json({ message: 'Error al obtener la orden' });
    }
};

// Crear una nueva orden
export const createOrder = async (req: Request, res: Response) => {
    try {
        const { idUser } = req.body;
        const newOrder = new Order({ idUser });
        await newOrder.save();
        return res.status(201).json({ message: 'Orden creada correctamente', order: newOrder });
    } catch (error) {
        return res.status(500).json({ message: 'Error al crear la orden' });
    }
};

// Actualizar orden (por ejemplo, cambiar el usuario)
export const updateOrder = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { idUser } = req.body;
        const updatedOrder = await Order.findByIdAndUpdate(
            id,
            { idUser },
            { new: true }
        );
        if (!updatedOrder) {
            return res.status(404).json({ message: 'Orden no encontrada' });
        }
        return res.status(200).json({ message: 'Orden actualizada', order: updatedOrder });
    } catch (error) {
        return res.status(500).json({ message: 'Error al actualizar la orden' });
    }
};

// Baja lógica de la orden
export const deleteOrder = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const deletedOrder = await Order.findByIdAndUpdate(
            id,
            { status: false },
            { new: true }
        );
        if (!deletedOrder) {
            return res.status(404).json({ message: 'Orden no encontrada' });
        }
        return res.status(200).json({ message: 'Orden eliminada (baja lógica)', order: deletedOrder });
    } catch (error) {
        return res.status(500).json({ message: 'Error al eliminar la orden' });
    }
};
