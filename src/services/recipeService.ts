import axios from "axios"
import { CategoriesAPIResponseSchema, RecipesApiResponseSchema } from "../utils/recipe-schema"
import { SearchFilters } from "../types"

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