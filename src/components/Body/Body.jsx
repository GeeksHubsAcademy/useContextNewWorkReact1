
import React from 'react';

import { Routes, Route } from 'react-router-dom';
import CharacterDetail from '../../containers/CharacterDetail/CharacterDetail';
import Home from '../../containers/Home/Home';

const Body = () => {

    return (
        <>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/detail' element={<CharacterDetail/>}/>
            </Routes>

        </>
    )
}

export default Body;