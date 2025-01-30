import { BrowserRouter, Routes, Route } from "react-router-dom"
import IndexPage from "./views/indexPage"
import FavoritosPage from "./views/FavoritosPage"

export default function AppRouter(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<IndexPage />} />
                <Route path='Favoritos' element={<FavoritosPage />} />
            </Routes>
        </BrowserRouter>
    )
}