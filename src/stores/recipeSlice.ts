import { StateCreator } from 'zustand';
import { getCategories } from '../services/recipeService';
import { Categories, SearchFilters } from '../types';


export type RecipeSliceType = {
    categories: Categories
    fetchCategories: () => Promise<void>
    searchRecipes: (searchFilters: SearchFilters) => Promise<void>
}

export const  createRecipeSlice: StateCreator<RecipeSliceType> = (set) => ({
    categories: {
        drinks: []
    },
    fetchCategories: async () =>{
        const categories = await getCategories();
        set({
            categories
        })
    },
    searchRecipes: async (filters) => {
        console.log(filters)
    }

})
    
