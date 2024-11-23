import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>
    
      <h1 className="text-fuchsia-700 text-5xl font-black text-center"> Productos Más Vendidos </h1>
    

      <nav className="py-5">
      <Link className="bg-fuchsia-200 hover:bg-fuchsia-400 px-10 py-3" to='/products/create'>
        Crear Producto
      </Link>
      </nav>
    </>
  )
}

