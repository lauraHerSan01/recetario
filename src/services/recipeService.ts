import axios from "axios"
import { CategoriesAPIResponseSchema, RecipeAPIResponseSchema, RecipesApiResponseSchema } from "../utils/recipe-schema"
import { Drink, SearchFilters } from "../types"

export async function getCategories() {
    const  url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'
    const { data } = await axios(url)
    const result = CategoriesAPIResponseSchema.safeParse(data)
    if (result.success) {
        return result.data
       
    }
}

export async function getRecipes(filters: SearchFilters){
    const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${filters.category}&i=${filters.ingredient}`
    const { data } = await axios(url)
    const result = RecipesApiResponseSchema.safeParse(data)
    if (result.success) {
        return result.data
       
    }
}

export async function getRecipeById(id: Drink ['idDrink']){
    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    const { data } = await axios(url)
    const result = RecipeAPIResponseSchema.safeParse(data.drinks[0])
    if (result.success) {
        return result.data
    }       
}