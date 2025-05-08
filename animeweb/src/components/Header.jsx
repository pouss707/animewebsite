import React from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import Person4Icon from '@mui/icons-material/Person4';
function Header() {
    return (
        <div>
            <header className='bg-blue-400 text-black flex justify-between items-center p-[10px] h-[70px] w-screen shadow-[0_0_0_0.05_black] font-bold'>
                <Link to="/"><img className='h-[60px] w-[60px] ml-[10px]' src={logo} alt="logo" /></Link>
                <div className='flex justify-center items-center ml-[8px]'>
                    <nav className='p-[10px]'>
                        <ul className="flex gap-[30px] list-image-none">
                            <select name="categories">
                                <option value="">categories</option>
                                <option value="action">action</option>
                                <option value="adventure">adventure</option>
                                <option value="comedy">comedy</option>
                                <option value="drama">drama</option>
                                <option value="fantasy">fantasy</option>
                                <option value="horror">horror</option>
                                <option value="mystery">mystery</option>
                                <option value="romance">romance</option>
                                <option value="sci-fi">sci-fi</option>

                            </select>
                            <li>blog</li>
                            <li>contact</li>
                        </ul>
                    </nav>
                </div>
                <div className='flex justify-center items-center gap-[20px] mr-[10px]'>
                    <button className='cursor-pointer'><SearchIcon /></button>
                    <button className='cursor-pointer'><Person4Icon /></button>
                </div>
            </header>
        </div >
    )
}

export default Header