//import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './modules/dashboard/Dashboard'
import appRoutes from './routes/appRoutes'


/**la logica de programacion va de aqui alla, por que es de llamar los archivos no hay que quitar el modo estricto de react, eso no se quita por que se peta
 * Aqui va el cascaron de nuestra app
 * en app se agregan el cascaron
 * deja los componentes dependiendo la navegacion que tenemos,
 * luego nos enseñan el multilenguaje
 */{appRoutes.map((route) => (
  <Route key={route.path} path={route.path} element={route.element} />
))}

function App() {
  //const [count, setCount] = useState(0)
  
  /*const menuSchema = new Schema({
  label: String,
  path: String,
  icon: String,
  roles: [{ type: Schema.Types.ObjectId, ref: 'Role' }],
  });*/
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />}>
            {appRoutes.map(route =>
              <Route key={route.path} path={route.path} element={route.element} />
            )}
            
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
