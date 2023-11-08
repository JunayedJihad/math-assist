import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import imgSrc from "../assets/image/Calculator-bro.png";
import MenuItem from "./MenuItem";

const MainLayout = () => {

  return (
    <div>
      <div className="container ">
        <div className="row">
          <div className="col-12 col-lg-6">
            <img src={imgSrc} alt="Illustration" />
          </div>
          <div className="col-12 col-lg-6 d-flex flex-column justify-content-center gap-2 gap-lg-4 text-light ">
            <h2 className="text-center text-lg-start mb-0">
              Tired of doing complex calculations?
            </h2>
            <h2 className="text-center text-lg-start mb-0">
              Now focus on the topic as
            </h2>
            <h2 className="text-center text-lg-start">
              <span className="h1 fw-bold " style={{ color: "#8e44ad" }}>
                MathAssist
              </span>{" "}
              is here for you...
            </h2>
          </div>
        </div>
        <div className="row mt-4 px-4  ">
          <div className=" menu_container order-lg-1 order-2 mt-4 mt-lg-0  col-12 col-lg-6 p-3 d-flex flex-column gap-2">
            <MenuItem title="Equilateral Triangle" path="/" />
            <MenuItem title="Isoseles Triangle" path="isoselesTriangle" />
            <MenuItem
              title="03 sides of triangle given"
              path="threeSidesGiven"
            />
            {/* <MenuItem title="02 sides and their angle given" /> */}
            <MenuItem title="03 Co-ordinates of triangle given" path='triangleArea' />
            <MenuItem title="Solve 02 linear equations" path="linearEquation" />
            <MenuItem
              title="Solve a quadratic equation"
              path="quadraticEquation"
            />
            <MenuItem title="Straight Line" path="straightLine" />
            <MenuItem title="Straight Line Equation" path="straightLineEqn" />
          </div>
          <div className="col-12 col-lg-6 order-lg-2 order-1  d-flex align-items-center justify-content-center  ">
            <Outlet />
          </div>
        </div>
      </div>
      <div className="mt-5 bg-dark text-light text-center py-4">
        Made by Junayed Jihad
      </div>
    </div>
  );
};

export default MainLayout;
