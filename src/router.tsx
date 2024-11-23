import { BrowserRouter,Routes,Route } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import HomePage from "./paginas/HomePage";
import CreateProductView from "./views/products/CreateProductView";



export default function Router() {

    return(
        <BrowserRouter>
        
            <Routes>
                <Route element={<AppLayout/>}>
                    <Route path='/' element={<HomePage/>}/>
                    <Route path='/products/create' element={<CreateProductView/>}/>

                </Route>
            </Routes>
        
        </BrowserRouter>
    )
}