import { Link } from "react-router-dom";
import {useForm} from 'react-hook-form'
import { ProductFormData } from "../../types";
import ProductForm from "../../components/products/ProductForm";
export default function CreateProductView() {

  const initialValues: ProductFormData= {
    name:"",
    description:"",
    price:0,
    available:false
  }


  const {register,handleSubmit,formState:{errors}} = useForm({defaultValues:initialValues})

  const handleForm = (data : ProductFormData) => {
    console.log(data)
  } 

  return (

    <>
      <div className="max-w-3xl mx-auto">

        <h1 className="text-5xl font-black"> Crear Producto</h1>

        <p className="text-2xl font-light text-gray-500 mt-5">
          Llena el siguiente formulario para crear un producto
        </p>

        <nav className="my-5">
          <Link className="bg-fuchsia-200 hover:bg-fuchsia-400 px-10 py-3" to='/'>
            Volver Home
          </Link>
        </nav>

        <form
          className="mt-10 bg-white shadow-lg p-10 rounded-lg"
          onSubmit={handleSubmit(handleForm)}
          noValidate
        >
          <ProductForm
            register={register}
            errors = {errors}
          />

          <input
            type="submit"
            value='Crear Producto'
            className="bg-fuchsia-600 hover:bg-fuchsia-700 w-full p-3 text-white uppercase font-bold cursor-pointer transition-colors"
          />

        </form>
      </div>
    </>


    
  )
}
