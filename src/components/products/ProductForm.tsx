import {FieldErrors,UseFormRegister} from 'react-hook-form'
import { ProductFormData } from '../../types'
import ErrorMessage from '../ErrorMessage'

type ProductFormProps = {
    register : UseFormRegister<ProductFormData>,
    errors : FieldErrors<ProductFormData>
}

export default function ProductForm({register,errors}: ProductFormProps) {
  return (
    <>
    <div className=' mb-5 space-y-3'>
        <label htmlFor="productName" className='text-sm uppercase font-bold'>Nombre del Producto
        </label>

        <input
            type='text'
            id='productName'
            className='w-full p-3 border border-gray-200'
            placeholder='Nombre del producto'
            {...register('name',{
                required:'El Nombre del Producto es obligatorio',
            })}
        />

        {errors.name && (
            <ErrorMessage>{errors.name.message}</ErrorMessage>
        )}
    </div>


    <div className=' mb-5 space-y-3'>
        <label htmlFor="productDescription" className='text-sm uppercase font-bold'>Descripción del Producto
        </label>

        <input
            type='text'
            id='productDescription'
            className='w-full p-3 border border-gray-200'
            placeholder='Descripción del producto'
            {...register('description',{
                required:'La Descripción del Producto es obligatoria',
            })}
        />

        {errors.description && (
            <ErrorMessage>{errors.description.message}</ErrorMessage>
        )}
    </div>




    <div className=' mb-5 space-y-3'>
        <label htmlFor="productPrice" className='text-sm uppercase font-bold'>Precio del Producto
        </label>

        <input
            type='number'
            id='productPrice'
            className='w-full p-3 border border-gray-200'
            placeholder='Precio del producto'
            {...register('price',{
                required:'El Precio del Producto es obligatorio',
                validate: value => value > 0 || 'El número debe ser mayor a 0'
            })}
        />

        {errors.price && (
            <ErrorMessage>{errors.price.message}</ErrorMessage>
        )}
    </div>




    <div className=' mb-5 space-y-3'>
        <label htmlFor="productAvailable" className='text-sm uppercase font-bold'>Disponibilidad del Producto
        </label>

        <input
            type='checkbox'
            id='productAvailable'
            className='text-fuchsia-200 ml-3 border border-gray-200'           
        />
    </div>
    
    </>
  )
}

