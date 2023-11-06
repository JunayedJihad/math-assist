import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import imgSrc from '../assets/image/Calculator-bro.png'
import MenuItem from './MenuItem';

const MainLayout = () => {
    
     return (
          <div className='container '>
               <div className="row">
                    <div className="col-12 col-lg-6">
                         <img src={imgSrc} alt="Illustration" />
                    </div>
                    <div className="col-12 col-lg-6 d-flex flex-column justify-content-center gap-2 gap-lg-4 text-light ">
                         <h2 className='text-center text-lg-start'>Tired of doing boring calculations?</h2>
                         <h2 className='text-center text-lg-start'>Now focus on the topics as</h2>
                         <h2 className='text-center text-lg-start'><span className='h1 fw-bold ' style={{color:'#8e44ad'}}>MathAssist</span> is here for you...</h2>
                    </div>
               </div>
               <div className="row mt-4 ">
                    <div className=" menu_container col-6 p-3 d-flex flex-column gap-2">
                         <MenuItem title='Equilateral Triangle'  path="/"/>
                         <MenuItem title='Isoseles Triangle'  path="isoseles"/>
                         <MenuItem title='03 sides of triangle given'/>
                         <MenuItem title='02 sides and their angle given'/>
                         <MenuItem title='03 Co-ordinates of triangle given'/>
                         <MenuItem title='Solve 02 linear equations'/>
                         <MenuItem title='Solve a quadric equation'/>
                    </div>
                    <div className="col-6 d-flex align-items-center ">
                         <Outlet/>
                    </div>
               </div>


          </div>
     );
};

export default MainLayout;