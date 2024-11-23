import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <>
      <header className="bg-gray-800 py-8">
        <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row justify-between items-center">

        <div className="text-3xl text-fuchsia-300">
          <h1> Nav Menu</h1>
        </div>

        <div className="text-2xl text-fuchsia-200">
          <h1> Options</h1>
          <h1> Options</h1>
          <h1> Options</h1>
        </div>

        </div>


      </header>


      <section className="max-w-screen-2xl mx-auto mt-10 p-5">
        <Outlet />
      </section>

      <footer className=" bg-gray-800 py-5">Footer
        <p className="text-white text-center"> Todos los derechos reservados {new Date().getFullYear()} </p>
      </footer>
    </>
  );
}

export default AppLayout;
