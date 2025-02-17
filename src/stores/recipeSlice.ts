import { StateCreator } from 'zustand';
import { getCategories, getRecipeById, getRecipes, getRecipesById } from '../services/recipeService';
import { Categories, Drink, Recipe, Recipes, SearchFilters } from '../types';


export type RecipeSliceType = {
    categories: Categories
    recipes: Recipes
    selectedRecipe: Recipe
    fetchCategories: () => Promise<void>
    searchRecipes: (searchFilters: SearchFilters) => Promise<void>
    selectRecipe: (id: Drink ['idDrink']) => Promise<void>
}

export const  createRecipeSlice: StateCreator<RecipeSliceType> = (set) => ({
    categories: {
        drinks: []
    },
    recipes: {
        drinks: []
    },
    selectedRecipe: {} as Recipe,
    fetchCategories: async () =>{
        const categories = await getCategories();
        set({
            categories
        })
    },
    searchRecipes: async (filters) => {
        const recipes = await getRecipes(filters)
        set({
            recipes
        })
    },
    selectRecipe: async (id) => {
        const selectedRecipe = await getRecipeById(id)
        set({
            selectedRecipe
        })
    }
})
    
