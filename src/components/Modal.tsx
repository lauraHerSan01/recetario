import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { useAppStore } from '../stores/useAppStore';
import { Recipe } from '../types';

export default function Modal() {
    const modal= useAppStore(state => state.modal)
    const closeModal = useAppStore(state => state.closeModal)
    const selectedRecipe = useAppStore(state => state.selectedRecipe)
    const addFavorites = useAppStore(state => state.addFavorites)
    const recipeExist= useAppStore(state => state.recipeExist)

    function renderIngredients(){
      const ingredients: JSX.Element[] = [];
      for (let i=1; i<=6; i++) {
        const ingredient = selectedRecipe[`strIngredient${i}` as keyof Recipe] 
        const meansure = selectedRecipe[ `strMeanure${i}` as keyof Recipe]
        if(ingredient && meansure) {
          ingredients.push(
            <li key={i}>{ingredient} - {meansure}</li>
          )
        }
    }

    return ingredients
  }
  return (
    <>
      <Transition appear show={modal} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-70" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl sm:p-6" >
                  <Dialog.Title as="h3" className="text-gray-900 text-4xl font-extrabold my-5 text-center">
                      { selectedRecipe.strDrink}
                  </Dialog.Title>
                  <img 
                    className='w-96 mx-auto'
                    src={selectedRecipe.strDrinkThumb}
                    alt={'Imagen de' + selectedRecipe.strDrink}
                  
                  />
                  <Dialog.Title as="h3" className="text-gray-900 text-2xl font-extrabold my-5">
                    Ingredientes y Cantidades
                  </Dialog.Title>
                  <ul>
                    {renderIngredients()}
                  </ul>
                  <Dialog.Title as="h3" className="text-gray-900 text-2xl font-extrabold my-5">
                    Instrucciones
                  </Dialog.Title>
                  <p className='text-lg'>{selectedRecipe.strInstructions }</p>
                  <div className='flex justify-between gap-4'>
                    <button 
                    onClick={closeModal}
                    className= 'w-full p-2 bg-gray-400 hover:bg-gray-500 rounded text-white uppercase'
                    type="button">Cerrar</button>
                    <button 
                    onClick={() => {
                      addFavorites(selectedRecipe)
                      closeModal()
                    }}
                    className= 'w-full p-2  bg-cyan-500 hover:bg-pink-600 rounded text-white uppercase'
                    type="button">{
                      recipeExist(selectedRecipe.idDrink)?
                      'Eliminar de':
                      'Agregar a'
                    }favoritos</button>
                  </div>
                </Dialog.Panel>
            </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}