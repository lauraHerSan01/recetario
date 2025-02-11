import { z } from "zod";

export const CategoriesAPIResponseSchema = z.object({
    drinks: z.array(
        z.object({
            strCategory: z.string()
        })
    )
})

export const SearchFiltersSchema = z.object({
    ingredients: z.string(),
    category: z.string()
})