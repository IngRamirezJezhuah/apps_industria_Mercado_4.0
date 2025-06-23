import { Request, Response } from "express";
import { Product } from "../models/ProductModel";

export const getAllProductos = async (req:Request, res:Response) => {
    try{
        const product = await Product.find({status:true});
        return res.status(200).json(product)
    }catch (error){
        return res.status(500).json({message:'no sirve chales, bua bua'})
    }
}

export const getProductById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        if (!product || !product.status) return res.status(404).json({ message: 'Producto no encontrado' });
        return res.status(200).json(product);
    } catch (error) {
        return res.status(500).json({ message: 'Error al obtener producto' });
    }
};

export const createProduct = async (req: Request, res: Response) => {
    try {
        const { name, price, qty, desc } = req.body;
        const newProduct = new Product({ name, price, qty, desc });
        await newProduct.save();
        return res.status(201).json({ message: 'Producto creado correctamente', product: newProduct });
    } catch (error) {
        return res.status(500).json({ message: 'Error al crear producto' });
    }
};

export const updateProduct = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { name, price, qty, desc } = req.body;
        const updatedProduct = await Product.findByIdAndUpdate(
        id,
        { name, price, qty, desc },
        { new: true }
        );
        if (!updatedProduct) return res.status(404).json({ message: 'Producto no encontrado' });
        return res.status(200).json({ message: 'Producto actualizado', product: updatedProduct });
    } catch (error) {
        return res.status(500).json({ message: 'Error al actualizar producto' });
    }
};

export const deleteProduct = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const deletedProduct = await Product.findByIdAndUpdate(
        id,
        { status: false, deletedate: new Date() },
        { new: true }
        );
        if (!deletedProduct) return res.status(404).json({ message: 'Producto no encontrado' });
        return res.status(200).json({ message: 'Producto eliminado (baja lógica)', product: deletedProduct });
    } catch (error) {
        return res.status(500).json({ message: 'Error al eliminar producto' });
    }
};