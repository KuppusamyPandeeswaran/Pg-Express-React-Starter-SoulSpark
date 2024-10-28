import { Bars3Icon } from '@heroicons/react/24/solid'
import React, { useState } from 'react'
export default function Header() {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <header className="flex justify-between px-5 py-5 bg-primary ">
            <a className="font-bold text-red-300" href="#">React Starter</a>
            <nav className="hidden md:block">
                <ul className="flex space-x-4 text-white ">
                    <li><a href="/">Home</a></li>
                    <li><a href="/#about">About</a></li>
                    <li><a href="/#contact">Contact</a></li>
                </ul>
            </nav>
            {toggleMenu && <nav className="block md:hidden">
                <ul className="flex flex-col text-white mobile-nav">
                    <li><a href="/">Home</a></li>
                    <li><a href="/#about">About</a></li>
                    <li><a href="/#contact">Contact</a></li>
                </ul>
            </nav>}
            <button className='block md:hidden' onClick={() => setToggleMenu(!toggleMenu)}><Bars3Icon className='text-white h-5' /></button>
        </header>
    )
}
