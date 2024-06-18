import {BrowserRouter,Routes,Route} from 'react-router-dom'
//import Login from './paginas/Login'
import AuthLayout from './layouts/AuthLayout'
import IndexPage from './paginas/IndexPage'
import HomePage from './paginas/HomePage'



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AuthLayout/>}>
          <Route index element={<IndexPage/>}></Route>
          <Route path='/producto' element={<HomePage></HomePage>}></Route>
          
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
