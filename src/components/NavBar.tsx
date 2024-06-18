export default function NavBar() {

    return (

        <>
            <div className="h-10 bg-gray-700 w-full flex justify-end items-center">
                <h1 className="mr-5 text-white"> <a href="">Iniciar Sesión</a> | <a href="">Registrarse</a>   </h1>
            </div>
            <div className="h-20 bg-white w-full flex">
                <div className=" w-1/4 flex justify-center items-center"><img className="object-contain w-full h-full" src="src\imgs\relojLogo.png" alt="" /></div>
                <div className="bg-gray-400 w-2/4 pr-10 pl-10 flex justify-center items-center">
                    <nav className="">
                        <ul className="flex justify-between items-center gap-10">
                            <li><h2>Inicio</h2></li>
                            <li><h2>Tienda</h2></li>
                            <li><h2>Sobre Nosotros</h2></li>
                            <li><h2>Contáctenos</h2></li>

                        </ul>
                    </nav>
                </div>
            </div>
        </>
    )

}