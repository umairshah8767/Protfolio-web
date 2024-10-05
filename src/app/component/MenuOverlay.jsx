import React from "react";
import NavLink from "./NavLink";

const MenuOverlay = ({ link }) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {link.map((linkItem, index) => (
        <NavLink key={index} href={linkItem.path} title={linkItem.title} />
      ))}
    </ul>
  );
};

export default MenuOverlay;
