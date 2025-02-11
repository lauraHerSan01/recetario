import { z } from "zod";

export const CategoriesAPIResponseSchema = z.object({
    drinks: z.array(
        z.object({
            strCategory: z.string()
        })
    )
})

export const SearchFiltersSchema = z.object({
    ingredient: z.string(),
    category: z.string()
})

export const DrinkSchema = z.object({
    idDrink: z.string(),
    strDrink: z.string(),
    strDrinkThumb: z.string()
})


export const RecipesApiResponseSchema = z.object({
    drinks: z.array(
        DrinkSchema
    )
})