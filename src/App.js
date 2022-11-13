import React from 'react';
import LoadingToast from './components/toast-loading';
import TurkeyMaps from './components/turkeyMap';
import TurkeyMapsPost from './components/turkeyMap/turkeyMapPost';
import NotFoundPage from "./pages/notFoundPage"
import HomePage from "./pages/homePage"
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {

    return (
        <React.Fragment>
            <BrowserRouter>
                <Routes>
                    <Route element={<TurkeyMaps />} path="/turkey" />
                    <Route path="/" element={<HomePage />} />
                    <Route element={<HomePage />} path="/homepage" />
                    <Route element={<TurkeyMapsPost />} path="/turkey/:id" />
                    <Route element={<NotFoundPage />} path="*" />
                </Routes>
            </BrowserRouter>
            <LoadingToast />
        </React.Fragment >
    )
}

export default App;
