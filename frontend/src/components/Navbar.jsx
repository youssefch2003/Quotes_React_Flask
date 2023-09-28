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
          <button
            type="button"
            className="text-white bg-sky-500 hover:bg-rose-300 focus:ring-4  font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0" >
            Get started
          </button>
          
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-emerald-200 ">
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-white bg-rose-300 rounded md:bg-transparent md:text-sky-500 md:p-0 "
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-white rounded hover:bg-rose-300 md:hover:bg-transparent md:hover:text-rose-300 md:p-0 "
              >
                History
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-white rounded hover:bg-white-100 md:hover:bg-transparent md:hover:text-rose-300 md:p-0 "
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-pink-300 md:p-0 "
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
