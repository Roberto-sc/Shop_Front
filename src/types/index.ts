import { z } from "zod";

// Products

export const productSchema = z.object({
    _id:z.string(),
    name:z.string(),
    description:z.string(),
    price:z.number(),
    available:z.boolean()
})

export type Product = z.infer<typeof productSchema>
export type ProductFormData = Pick<Product,'name' | 'description' | 'available' | 'price'>


  