import React, { useState } from "react";

const Nav = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen((prev) => !prev);
  };

  return (
    <nav className='flex justify-between p-5 px-0 md:p-0 md:px-16'>
      <div>
        <h1 className='text-xl font-semibold text-white md:text-2xl'>
          loopStudios
        </h1>
      </div>
      <div className='hidden md:block'>
        <ul className='flex space-x-10 text-white'>
          <li>About</li>
          <li>Careers</li>
          <li>Events</li>
          <li>Products</li>
          <li>Support</li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
