import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { userForm } from "./modules/users/userForm.tsx";
/**la logica de programacion va de aqui alla, por que es de llamar los archivos no hay que quitar el modo estricto de react, eso no se quita por que se peta
 * Aqui va el cascaron de nuestra app
 * en app se agregan el cascaron
 * deja los componentes dependiendo la navegacion que tenemos,
 * luego nos enseñan el multilenguaje
 */
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <h1 class="text-3xl font-bold underline">
          Hello world!
        </h1>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      {/*<userForm />*/}
      <userForm />
    </>
  )
}

export default App
