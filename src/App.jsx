import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import EquilateralTri from './components/EquilateralTri';
import IsoselesTriangle from './components/IsoselesTriangle';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout/>}>
          <Route index element={<EquilateralTri/>}/>
          <Route path='isoseles' element={<IsoselesTriangle/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;