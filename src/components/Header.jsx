import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Header() {
  return (
    <header class="pb-6 bg-white lg:pb-0">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <nav class="flex items-center justify-between h-16 lg:h-20">
            <div class="flex-shrink-0">
                <a href="#" title="" class="flex">
                    <img class="w-auto h-8 lg:h-10" src="public/logo.jpeg" alt="" />
                </a>
            </div>

            <button
            type="button"
            className="inline-flex items-center px-4 py-2 text-base font-semibold text-black "
          >
            ContactManager
          </button>

            <div class="hidden lg:flex lg:items-center lg:ml-auto lg:space-x-10">
                <Link to="/" title="" class="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Home </Link>

                <Link to="/About" title="" class="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> About </Link>

                <Link to="/ContextList" title="" class="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> ContextList </Link>

                <Link to="/Contact" title="" class="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Contect Us </Link>
            </div>
        </nav>

        <nav class="pt-4 pb-6 bg-white border border-gray-200 rounded-md shadow-md lg:hidden">
            <div class="flow-root">
                <div class="flex flex-col px-6 -my-2 space-y-1">
                    <a href="#" title="" class="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Features </a>

                    <a href="#" title="" class="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Solutions </a>

                    <a href="#" title="" class="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Resources </a>

                    <a href="#" title="" class="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Pricing </a>
                </div>
            </div>

            <div class="px-6 mt-6">
                <a href="#" title="" class="inline-flex justify-center px-4 py-3 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md tems-center hover:bg-blue-700 focus:bg-blue-700" role="button"> Get started now </a>
            </div>
        </nav>
    </div>
</header>

  );
}

export default Header;
