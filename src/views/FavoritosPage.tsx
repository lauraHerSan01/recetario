import DrinkCard from "../components/DrinkCard";
import { useAppStore } from "../stores/useAppStore"
import { useMemo } from 'react';

export default function FavoritosPage() {

    const favorites = useAppStore(state => state.favorites)
    const hasFavorites = useMemo(()=> favorites.length > 0, [favorites])

    return(
        <>
        <h1 className="text-6xl font-extrabold">Recetas</h1>
        {
            hasFavorites ? (
                <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 my-10 gap-10">
                {
                  favorites.map(drink => (
                    <DrinkCard 
                      key={drink.idDrink}
                      drink={drink}
                      />
                  ))
                }
                </div>
              ): (
                <p className="my-10 text-center text-2xl">Aqui se muestran los Favoritos</p>
              )
            }
        </>
    )
}