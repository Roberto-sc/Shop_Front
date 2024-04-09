import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './paginas/Login'
import AuthLayout from './layouts/AuthLayout'



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AuthLayout/>}>
          <Route index element={<Login/>}></Route>
          
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
