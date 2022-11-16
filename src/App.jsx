import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PLaceToStay from './pages/PlaceToStay';
import Layout from './Layout';

function App() {
  return (
    <>
      <Routes>
        <Route path='/'>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='placeToStay' element={<PLaceToStay />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
