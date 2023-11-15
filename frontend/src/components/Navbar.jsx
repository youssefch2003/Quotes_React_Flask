import React from 'react';
import {LiaQuoteRightSolid} from 'react-icons/lia'
function Navbar() {
  
  return (
    <nav className="bg-emerald-200   z-20    ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between  p-4">
        <a href="/" className="flex items-center">
          
          <span className="self-center text-sky-500 text-2xl font-semibold whitespace-nowrap ">
          Quotes
          </span> <LiaQuoteRightSolid className='sky-500'/>
        </a>
        <div className="flex md:order-2">
          {/* <button
            type="button"
            className="text-white bg-sky-500 hover:bg-rose-300 focus:ring-4  font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0" >
            Get started
          </button> */}
          <h2> Online Quotes Generator</h2>

          
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
