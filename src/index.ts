import express from 'express';
import morgan from 'morgan';
import authRoutes from './route/auth.routes';
import connectDB from './config/bd';
import userRoutes from './route/auth.routes'; 

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(morgan('dev'));

app.use('/api/auth', authRoutes);
app.use('/api', userRoutes);
//conexion anonima, no se nombra
connectDB().then(() => {
    //console.log(`Mongo conectado ( ദ്ദി ˙ᗜ˙ )`)
    app.listen(PORT, () => {
    console.log(`The server is running on : ${PORT} ദി ˉ͈̀꒳ˉ͈́ )✧`);
    console.log(`El servidor esta corriendo en el puerto: ${PORT} ദി ˉ͈̀꒳ˉ͈́ )✧`);
    })
})
