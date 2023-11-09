import React from "react";
import { NavLink } from "react-router-dom";

const MenuItem = ({ title, path }) => {
  const style={
    color:"white",
    backgroundColor:"rgb(91, 69, 234)"
  }

  return (
    <NavLink
      style={({isActive})=>(isActive ? style:null)}
      className={`menu_item rounded-2 shadow d-flex justify-content-center align-items-center py-2`}
      to={path}
    >
      {title}
    </NavLink>
  );
};

export default MenuItem;
