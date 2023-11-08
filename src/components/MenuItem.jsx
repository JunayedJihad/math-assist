import React from "react";
import { NavLink } from "react-router-dom";

const MenuItem = ({ title, path }) => {

  return (
    <NavLink
      className={`menu_item bg-light rounded-2 shadow d-flex justify-content-center align-items-center py-2`}
      to={path}
    >
      {title}
    </NavLink>
  );
};

export default MenuItem;
