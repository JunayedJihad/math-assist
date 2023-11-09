import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import EquilateralTri from './components/EquilateralTri';
import IsoselesTriangle from './components/IsoselesTriangle';
import ThreeSideGivenTriangle from './components/ThreeSideGivenTriangle';
import LinearEquation from './components/LinearEquation';
import QuadraticEquation from './components/QuadraticEquation';
import StraightLine from './components/StraightLine';
import TriangleArea from './components/TriangleArea';
import StraightLineEqn from './components/StraightLineEqn';
import TriangleAngleGiven from './components/TriangleAngleGiven';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout/>}>
          <Route index element={<EquilateralTri/>}/>
          <Route path='isoselesTriangle' element={<IsoselesTriangle/>}/>
          <Route path='threeSidesGiven' element={<ThreeSideGivenTriangle/>}/>
          <Route path='oneAngleGiven' element={<TriangleAngleGiven/>}/>
          <Route path='linearEquation' element={<LinearEquation/>}/>
          <Route path='quadraticEquation' element={<QuadraticEquation/>}/>
          <Route path='straightLine' element={<StraightLine/>}/>
          <Route path='triangleArea' element={<TriangleArea/>}/>
          <Route path='straightLineEqn' element={<StraightLineEqn/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;