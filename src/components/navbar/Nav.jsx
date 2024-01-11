import React from "react";

const Nav = () => {
  return (
    <nav className='flex justify-between p-5 px-0'>
      <div>
        <h1 className='text-xl font-semibold text-white'>loopStudios</h1>
      </div>
      <div className='flex space-x-10 text-white'>
        <div>About</div>
        <div>Careers</div>
        <div>Events</div>
        <div>Products</div>
        <div>Support</div>
      </div>
    </nav>
  );
};

export default Nav;
