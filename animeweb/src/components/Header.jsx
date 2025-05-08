import React from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
function Header() {
    return (
        <div>
            <header className='bg-blue-400 text-black flex justify-between items-center p-[10px] h-[70px] w-screen shadow-[0_0_0_0.05_black] font-bold'>
                <img className='h-[60px] w-[60px]' src={logo} alt="logo" />
                <nav className='mr-[10px] p-[10px]'>
                    <ul className="flex gap-[10px] list-image-none">
                        <li>blog</li>
                        <li>contact</li>
                        <li>
                            <ul>
                                <Link></Link>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Header