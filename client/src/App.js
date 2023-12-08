import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {GlobalStyle} from "./GlobalStyles";
import HomePage from "./components/HomePage/HomePage";
import AddAnimalPage from "./components/AddAnimalPage/AddAnimalPage";
import AnimalDetailPage from "./components/AnimalDetailPage/AnimalDetailPage";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";
import AnimalsListPage from "./components/AnimalsListPage/AnimalsListPage";
import ModifyAnimalPage from "./components/ModifyAnimalPage/ModifyAnimalPage"
function App() {
    return (
        <BrowserRouter>
            <GlobalStyle/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/animals" element={<AnimalsListPage/>}/>
                <Route path="/add" element={<AddAnimalPage/>}/>
                <Route path="/animals/:animalId" element={<AnimalDetailPage/>}/>
                <Route path={"/animals/modification/:animalId"} element={<ModifyAnimalPage/>}/>
                <Route path="*" element={<NotFoundPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
