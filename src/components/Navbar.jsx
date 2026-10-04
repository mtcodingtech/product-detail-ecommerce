import { useState } from "react";
import Drawer from "./Drawer";
import NavLinks from "./NavLinks";



function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (

    <>
      <nav className="flex items-center justify-between p-4 md:py-8 md:px-4 border-b border-b-gray-200">
      <div className="flex items-center gap-4 md:gap-12">
        <img src="/images/icon-menu.svg" alt="logo" className="md:hidden" onClick={() => setIsDrawerOpen(!isDrawerOpen)}/>
        <img src="/images/logo.svg" alt="logo" />
        <NavLinks />
      </div>
      <div className="flex items-center gap-10">
        <img src="/images/icon-cart.svg" alt="cart" />
        <img
          src="/images/image-avatar.png"
          alt="avatar"
          className="w-10 aspect-square object-cover"
        />
      </div>
    </nav>
    {isDrawerOpen && <Drawer setIsDrawerOpen={setIsDrawerOpen}></Drawer>}
    
    </>
  
  );
}

export default Navbar;
