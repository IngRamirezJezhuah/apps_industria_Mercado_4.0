import { type JSX } from 'react'
import UserForm from '../modules/users/userForm';
import LoginForm from '../modules/login/LoginForm';


export interface AppRoute{
    path: string;
    element: JSX.Element;
    label?:string;
    icon?: string;
}
const appRoutes : AppRoute[] =[
    {
    path: '/',
    element: <UserForm/>,
    label: 'Inicio' ,
    icon: 'HomeOutlined',
    },
    {
    path: '/dashboard',
    element: <p>Dashboard</p>,
    label: 'Inicio' ,
    icon: 'HomeOutlined',
    },
    {
    path: '/users',
    element: <UserForm/>,
    label: 'Usuarios' ,
    icon: 'UserOutlined',
    },
    {
    path: '/products',
    element: <p>productos</p>,
    label: 'productos' ,
    icon: 'UserOutlined',
    },
    {
    path: '/reports',
    element: <p>reporte</p>,
    label: 'ordenes' ,
    icon: 'UserOutlined',
    },
    {
    path: '/login',
    element: < LoginForm />,
    label: 'ordenes' ,
    icon: 'UserOutlined',
    },
]

export default appRoutes