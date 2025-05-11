import React from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import Person4Icon from '@mui/icons-material/Person4';
import switchImage from '../assets/switch.png';
import '../App.css'
function Header() {
    return (
        <div>
            <header className='bg-[#24A2DD] text-black flex rounded-[50px] justify-between items-center p-[10px] h-[70px] w-[1470px] mx-[33px]  shadow-[0_0_0_0.05_black] font-bold'>
                <Link to="/"><img className='h-[60px] w-[60px] ml-[10px]' src={logo} alt="logo" /></Link>
                <div className='flex justify-center items-center ml-[106px]'>
                    <nav className='p-[10px]'>
                        <ul className="flex gap-[20px] list-image-none">
                            <select className='btn' name="categories">
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
                            <li className='btn'>blog</li>
                            <li className='btn'>contact</li>
                        </ul>
                    </nav>
                </div>
                <div className='flex justify-center items-center gap-[20px] mr-[10px]'>
                    <button className="cursor-pointer bg-white border-[3px] rounded-[50px] p-[2px] shadow-[0.1em_0.1em_black]"><SearchIcon /></button>
                    <button className="cursor-pointer bg-white border-[3px] rounded-[50px] p-[2px] shadow-[0.1em_0.1em_black]"><Person4Icon /></button>
                    <label className="switch">
                        <input type="checkbox" />
                        <span className="slider">
                            <img className="knob" src={switchImage} />
                        </span>
                    </label>
                </div>
            </header>
        </div >
    )
}

export default Header