import {Typography} from "@material-tailwind/react";
import CardDefault from "../components/CardDefault";
import { CarouselCustomNavigation } from "../components/CarouselCustomNavigation";
import { FooterWithLogo } from "../components/FooterWithLogo";


  

export default function HomePage() {
  return (
<>
   
    <div className="h-40 w-full flex">
    <CarouselCustomNavigation></CarouselCustomNavigation>
        
    </div>
    
    <div className="h-custom w-full">
        <div  className="h-10 w-full flex items-center justify-center">
            
            <Typography placeholder={''} variant="h3" color="black">Nuestros productos más vendidos. </Typography>
        </div>
        <div className="w-full flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 pt-3">
            <CardDefault image="src\imgs\reloj1.jpg" title={"Producto 1"} description={"Esta es una descripcion de prueba"} price={1000}></CardDefault>
            <CardDefault image="src\imgs\reloj2.jpg" title={"Producto 2"} description={"Esta es una descripcion de prueba"} price={10000}></CardDefault>
            <CardDefault image="src\imgs\reloj3.jpg" title={"Producto 3"} description={"Esta es una descripcion de prueba"} price={100000}></CardDefault>

        </div>
       


    </div>
    

    
    
    
    
    
    
    
    </>
  ) 
}



