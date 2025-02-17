import { useMemo } from "react"
import { useAppStore } from "../stores/useAppStore"
import DrinkCard from "../components/DrinkCard"

export default function IndexPage() {

  const recipes = useAppStore(state => state.recipes)

  const hasRecipes = useMemo(() => recipes.drinks.length > 0, [recipes])
  
  return (
    <>
    <h1>Recetas</h1>
    {
      hasRecipes?(
        <div className="grid grid-cols-1 md:grid-cols-2 2x1:grid-cols-3 my-10 gap-10">
        {
          recipes.drinks.map(drink => (
           <DrinkCard 
              drink={drink}
              key={drink.idDrink}></DrinkCard>
          ))
        }
        </div>
      ): (
        <p>No hay recetas todavia, busca unas</p>
      )
    }
    </>
  )
}
