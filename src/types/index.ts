import { z } from "zod";
import { CategoriesAPIResponseSchema, DrinkSchema, RecipesApiResponseSchema, SearchFiltersSchema, RecipeAPIResponseSchema } from "../utils/recipe-schema";

export type Categories = z.infer<typeof CategoriesAPIResponseSchema>
export type SearchFilters = z.infer<typeof SearchFiltersSchema>
export type Recipes = z.infer<typeof RecipesApiResponseSchema>
export type Drink = z.infer<typeof DrinkSchema>
export type Recipe = z.infer<typeof RecipeAPIResponseSchema>