import {BrowserRouter,Routes,Route} from 'react-router-dom'
//import Login from './paginas/Login'
import AuthLayout from './layouts/AuthLayout'
import IndexPage from './paginas/IndexPage'



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AuthLayout/>}>
          <Route index element={<IndexPage/>}></Route>
          
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
