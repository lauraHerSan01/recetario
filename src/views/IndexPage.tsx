import { useMemo } from "react"
import { useAppStore } from "../stores/useAppStore"
import DrinkCard from "../components/DrinkCard"

export default function IndexPage() {

  const recipes = useAppStore(state => state.recipes)

  const hasRecipes = useMemo(() => recipes.drinks.length > 0, [recipes])
  
  return (
    <>
    <h1 className="text-3xl font-bold text-center my-6">Recetas</h1>
    {
      hasRecipes?(
        <div className="grid grid-cols-1 md:grid-cols-3 x1:grid-cols-3 my-10 gap-10">
        {
          recipes.drinks.map(drink => (
           <DrinkCard 
              drink={drink}
              key={drink.idDrink}></DrinkCard>
          ))
        }
        </div>
      ): (
        
        <div className="flex flex-col items-center justify-center my-16 p-6 bg-gray-100 rounded-lg shadow-md">
            <p className="text-lg font-semibold text-gray-700">No hay recetas todavía, busca unas</p>
             
    </div>
      )
    }
    </>
  )
}
