import React from "react";
import { useGlobalContext } from "./context";
import { FaBars } from "react-icons/fa";
import Navlinks from "./Navlinks";

const Navbar = () => {
  const { setPageId,OpenSidebar } = useGlobalContext();

  const handleSubMenu = (e) => {
    // console.log(e.target);
    if(!e.target.classList.contains('nav-link')){
      setPageId(null);
    }
  };
  return (
    <nav onMouseOver={handleSubMenu}>
      <div className="nav-center">
        <h3 className="logo">ENS</h3>
        <button className="toggle-btn" onClick={OpenSidebar}>
          <FaBars></FaBars>
        </button>
        <Navlinks></Navlinks>
      </div>
    </nav>
  );
};

export default Navbar;
